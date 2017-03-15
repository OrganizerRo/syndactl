app.controller("quizController", ['$scope', 'dbFactory', function($scope, dbFactory){
    
    $scope.SequentialMode = false;
    $scope.StudyMode = false;
    $scope.NumOfChoices = 4;
    $scope.lastResult = {};	
    $scope.db = [];
    $scope.QuestionIndex = 0;
	
    $scope.Question = {};
    $scope.lstAnswers = [];
	$scope.lastResult = { 
		correct: true,
		msg: "Good Luck",
		Question: null
	};
	
    $scope.ResponseMessage = "";
    
    $scope.CorrectAnswers = 0;
    $scope.IncorrectAnswers = 0;
    
    $scope.init = function(){
		$scope.db = dbFactory.ZodiacalMonths();
        $scope.LoadNextQuestion();
    }
    $scope.Score = function() {
		if ($scope.CorrectAnswers + $scope.IncorrectAnswers == 0)
			return 100;
		return (($scope.CorrectAnswers / ($scope.CorrectAnswers + $scope.IncorrectAnswers)) * 100);
	}
	$scope.SequentialMode_OnClick = function() {
		if($scope.SequentialMode){
			$scope.QuestionIndex = 0;
			$scope.LoadNextQuestion();
		}
	};
	
	$scope.StudyMode_OnClick = function() {
		if($scope.StudyMode)
			$scope.lastResult = {
				correct: true,
				msg: "Study Hard !",
				Question: $scope.Question
			};
	};
	
    $scope.Randomize =  function(start, end) {
        return Math.floor((Math.random() * end) + start);
    };
    
    $scope.QuestionsCount = function(){
        return $scope.db.length;
    };
    
    $scope.TestAnswer = function(qid){        
        var isRight = (qid == $scope.Question.qid);
		
		$scope.lastResult = { 
			correct: isRight,
			msg: (isRight)? "Great Job !": "InCorrect",
			Question: null,
			cssClass:  (isRight)? "correct": "incorrect"
		};
		
		if(isRight) {
			$scope.CorrectAnswers++;
		} else {
			$scope.IncorrectAnswers++;
		}
		
		$scope.LoadNextQuestion();
    };
    
    $scope.GetRandomQuestion = function(){
        var rndQuestionIX = $scope.Randomize(0, $scope.db.length -1);
        return $scope.db[rndQuestionIX];  //question row object
    };
    
    $scope.GetRandomAnswer = function(NotAllowedAnswers){
        var allowedAnswers = $scope.db.filter(function(co, ix, ar){
            return NotAllowedAnswers.find(function(o,i,r){
				return o.qid == co.qid;
			}) == undefined;
        });				        
        var rndQuestionIX = $scope.Randomize(0, allowedAnswers.length - 1);        
		
        return allowedAnswers[rndQuestionIX];
    };
    
    
    $scope.LoadNextQuestion = function(){
		
        var lQuestion = {};
		
		if($scope.SequentialMode) {			
			lQuestion = $scope.db[$scope.QuestionIndex];
			
			if($scope.QuestionIndex == $scope.db.length - 1)
				$scope.QuestionIndex = 0;
			else
				$scope.QuestionIndex++;
		} else {			
			lQuestion = $scope.GetRandomQuestion();
		}

        $scope.Question = lQuestion;        
		
        $scope.lstAnswers = [{ 
			qid: lQuestion.qid,
			answer:lQuestion.answer
		}];
		
        var randomIX = $scope.Randomize(1, $scope.NumOfChoices);
        
        for(var x=0;x < $scope.NumOfChoices - 1;x++){
            var rndAns = $scope.GetRandomAnswer($scope.lstAnswers);
			
            $scope.lstAnswers.push({ 
				qid: rndAns.qid,
				answer:rndAns.answer
			});
        };
		
		$scope.lstAnswers.splice(0,1);
		
		$scope.lstAnswers.splice(randomIX - 1,0, { 
			qid: lQuestion.qid,
			answer: lQuestion.answer
		});
    };
     
    $scope.init();
}]);