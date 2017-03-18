
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
    $scope.MenuMode = true;
	
	$scope.lastResult = { 
		correct: true,
		msg: "Good Luck",
		Question: null
	};
    
    $scope.init = function(){
		var view = window.location.search.toLowerCase().split('v=')[1];			
		
		if(typeof(view) != 'undefined')
			$scope.MenuMode = false;
		
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
		if($scope.MenuMode)
			return;
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


var quizApp = (function(){
	var self = this;
	var imageWidth = 10;
	var imageHeight = 10;
	
	function Window_OnResize(){
		var dimensions = RecalculateImageSize();
		SetImageSize(dimensions.width, dimensions.height);
		var ih = $("#qzimage")[0].clientHeight;		
		ResizeViewPort(dimensions.width, ih);
	};
	function RecalculateImageSize(){			
		var qzcontainer = $("#qzcontainer")[0];
		self.imageWidth = qzcontainer.clientWidth / 1.5;
		
		if(self.imageWidth > $("#shadowimg")[0].naturalWidth)
			self.imageWidth = $("#shadowimg")[0].naturalWidth;
		
		/*self.imageHeight = qzcontainer.clientHeight /3;*/
		return {
			width: self.imageWidth,
			height: self.imageHeight
		};
	};
	
	function SetImageSize(width, height){
		var qz = $("#qzimage");			
		qz.css("width", self.imageWidth);
		qz.css("height", "auto");
		return;
	};
	
	function ResizeViewPort(imageWidthParm,height){
		$("#imagediv").css("overflow-x", "scroll");
		$("#imagediv").css("overflow-y", "hidden");		
		$("#imagediv").css("width", imageWidthParm / 2);
		$("#imagediv").css("height", height);
		return;
	};
	function ImageZoom_OnClick(){		
		var shadowimg = $("#shadowimg");
		var newshow = shadowimg.attr("data-show") == "false" ? true: false;
		var container = $("#qzcontainer")[0];
		
		shadowimg.attr("data-show", newshow);
		
		if(newshow){
			shadowimg.css("display", "block");
			shadowimg.css("position", "absolute");
			shadowimg.css("left", "0px");
			shadowimg.css("top", "0px");
			shadowimg.css("width", container.clientWidth - 5 +"px");
			//shadowimg.css("height", container.clientHeight - 5 + "px");
		} else {
			shadowimg.css("display", "none");
			shadowimg.css("position", "absolute");
			shadowimg.css("left", "0px");
			shadowimg.css("top", "0px");
			shadowimg.css("width", "2px");
			//shadowimg.css("height", "2px");
		}
		
		return;
	};
	function StudyImage_OnClick(){
		var curobj = $("#imagediv")[0];
		var curpos = curobj.scrollLeft;

		if(curpos == 0)
			curobj.scrollLeft = self.imageWidth / 2;
		else
			curobj.scrollLeft = 0;
		return;
	};
	return {
		Window_OnResize: Window_OnResize,
		RecalculateImageSize : RecalculateImageSize,
		StudyImage_OnClick: StudyImage_OnClick,
		ImageZoom_OnClick: ImageZoom_OnClick
	};
})();
	
$(document).ready(function(){

	$('#txtAnswer').keyup(function(e){
		if(e.keyCode == 13){
			$('#btnAnswer').click();
		} 
	});

	$(window).on('resize', function(){				
		quizApp.Window_OnResize();
	});
	$("#shadowimg").on('load', function(){				
		quizApp.Window_OnResize();
	});
		
});