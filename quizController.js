
app.controller("quizController", ['$scope', '$routeParams', 'dbFactory', function($scope, $routeParams, dbFactory){
    
	//public
    $scope.SequentialMode = false;
    $scope.StudyMode = false;
    $scope.NumOfChoices = 4;
	$scope.MultipleChoiceMode = false;
	$scope.txtAnswer = "";
	//privates
	$scope.CorrectAnswers = 0;
    $scope.IncorrectAnswers = 0;
    $scope.db = [];
    $scope.QuestionIndex = 0;
    $scope.Question = {};
    $scope.lstAnswers = [];
	$scope.lastResult = {};
	$scope.ResponseMessage = "";
    
	
	$scope.lastResult = { 
		correct: true,
		msg: "Good Luck",
		Question: null
	};
    
    $scope.init = function(){
		var view = window.location.search.toLowerCase().split('v=')[1];			
		
		switch(view){
			case "zodiacalmonths":{
				$scope.db = dbFactory.ZodiacalMonths();
				break;
			}
			case 'zodiacwithintheelements' :{
				$scope.db = dbFactory.ZodiacwithintheElements();
				break;
			}
		}
		$scope.CalculateNumberOfChoices();
        $scope.LoadNextQuestion();
    }
    
	$scope.CalculateNumberOfChoices = function(){		
		if($scope.db.length > 3)
		{
			$scope.NumOfChoices = 2
		}		
		if($scope.db.length > 6)
		{
			$scope.NumOfChoices = 3
		}		
		if($scope.db.length > 8)
		{
			$scope.NumOfChoices = 4
		}		
	};
	
	$scope.dbTitle = function(){
		return dbFactory.Title;
	};
	
	$scope.Score = function() {
		if ($scope.CorrectAnswers + $scope.IncorrectAnswers == 0)
			return 100;
		return (($scope.CorrectAnswers / ($scope.CorrectAnswers + $scope.IncorrectAnswers)) * 100);
	}
	
	$scope.SequentialMode_OnClick = function() {
		$scope.SequentialMode = !$scope.SequentialMode
		if($scope.SequentialMode){
			$scope.QuestionIndex = 0;
			$scope.LoadNextQuestion();
		}
	};
	
	$scope.StudyImage_OnClick = function() {	
		var curobj = $("#imagediv")[0];
		var curpos = curobj.scrollLeft;
		
		if(curpos == 0)
			curobj.scrollLeft = 373;
		else
			curobj.scrollLeft = 0;		
	};
	
	$scope.StudyMode_OnClick = function() {
		$scope.StudyMode = !$scope.StudyMode;
		
		if($scope.StudyMode)
			$scope.lastResult = {
				correct: true,
				msg: "Study Hard !",
				Question: $scope.Question
			};
		else
			$scope.lastResult = {
				correct: true,
				msg: "",
				Question: $scope.Question
			};
	};	
	
	$scope.btnTestAnswer_OnClick = function() {
		var isRight = $scope.txtAnswer.toLowerCase().indexOf($scope.Question.answer.toLowerCase()) > -1;
		$scope.txtAnswer = "";
		
		$scope.SetAnswerState(isRight, $scope.Question);
		
		$scope.LoadNextQuestion();
	};
	
	$scope.MultipleChoiceMode_OnClick = function() {
		$scope.MultipleChoiceMode = !$scope.MultipleChoiceMode; //toggle
		
		
	};
	
    $scope.Randomize =  function(start, end) {
        return Math.floor((Math.random() * end) + start);
    };
    
    $scope.QuestionsCount = function(){
        return $scope.db.length;
    };
    
    $scope.TestAnswer = function(qid){        
        var isRight = (qid == $scope.Question.qid);		
		
		$scope.SetAnswerState(isRight, $scope.Question);
		
		$scope.LoadNextQuestion();		
    };
    
	$scope.SetAnswerState = function(isRight, inQuestion){		
		$scope.lastResult = { 
			correct: isRight,
			msg: (isRight)? "Great Job !": "InCorrect",
			Question: inQuestion,
			cssClass:  (isRight)? "correct": "incorrect"
		};
		
		if(isRight) {
			$scope.CorrectAnswers++;
		} else {
			$scope.IncorrectAnswers++;
		}
	};
	
    $scope.GetRandomQuestion = function(){
        var rndQuestionIX = $scope.Randomize(0, $scope.db.length -1);
        return $scope.db[rndQuestionIX];  //question row object
    };
    
    $scope.GetRandomAnswer = function(NotAllowedAnswers){
        var allowedAnswers = $scope.db.filter(function(co, ix, ar){
            return NotAllowedAnswers.find(function(o,i,r){
				return o.answer == co.answer;
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

$(document).ready(function(){
	$('#txtAnswer').keyup(function(e){
		if(e.keyCode==13){
			$('#btnAnswer').click();
		} 
	});
});