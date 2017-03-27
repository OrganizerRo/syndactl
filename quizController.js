
app.controller("quizController", ['$scope', '$interval', '$routeParams', 'dbFactory', function($scope, $interval, $routeParams, dbFactory){
    
	//public
	$scope.NumOfChoices = 4;
    $scope.SequentialMode = false;
    $scope.StudyMode = false;
	$scope.MultipleChoiceMode = false;
	$scope.StopOnIncorrectAnswer = false;
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
	
		if(typeof(view) == 'undefined')
			$scope.SetView("menumode");
		else {			
			$scope.SetView(view);
			$scope.ShowQuizByViewName(view);			
		}
    };
    
	$scope.SetView = function(inView){
		
		if(inView!='menumode')
			$scope.MenuMode = false;
		
		switch(inView){
			/* Set View Controllers here*/
			case 'menumode':
			default:{				
				$scope.MenuMode = true;			
				break;
			}
		}
	};
	
	$scope.ShowQuizByViewName = function(aview){
			$scope.SetView(aview);
			$scope.CalculateNumberOfChoices();
			$scope.LoadNextQuestion();
			
			var tmr_cnt = 0;
			var WindowResize_tmr = $interval(function(){
				tmr_cnt++;
				if($("#qzimage")[0] != 'undefined' || tmr_cnt > 1500){
					quizApp.Window_OnResize();
					$interval.cancel(WindowResize_tmr);
				}
			}, 150);
			
				
	};
	
	$scope.CalculateNumberOfChoices = function(){		
		var distinctAnswers =[];
		
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
		
		distinctAnswers = $scope.getDistinctAnswers();
		
		if ($scope.NumOfChoices > distinctAnswers.length)
			$scope.NumOfChoices = distinctAnswers.length;
	};
	
	$scope.getDistinctAnswers = function(){
		var ans = [];
		
		$scope.db.filter(function(o,i,a){
			if(ans.indexOf(o.answer) == -1)
				ans.push(o.answer);
		});
		return ans;
		// if(ans.length < $scope.NumOfChoices)
			// $scope.NumOfChoices = ans.length;
	};	
	
	$scope.dbTitle = function(){
		return dbFactory.Title;
	};
	
	$scope.Score = function(){
		if ($scope.CorrectAnswers + $scope.IncorrectAnswers == 0)
			return 100;
		return (($scope.CorrectAnswers / ($scope.CorrectAnswers + $scope.IncorrectAnswers)) * 100);
	}
	
	$scope.btnHome_OnClick = function(){
		$scope.SetView("menumode");		
	};
	
	$scope.SequentialMode_OnClick = function() {
		$scope.SequentialMode = !$scope.SequentialMode
		if($scope.SequentialMode){
			$scope.QuestionIndex = 0;
			$scope.LoadNextQuestion();
		}
	};
	
	$scope.StopOnIncorrectAnswer_OnClick = function(){
		$scope.StopOnIncorrectAnswer = !$scope.StopOnIncorrectAnswer;
	}
	
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
		if(isRight || !$scope.StopOnIncorrectAnswer)
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
		
		if(isRight || !$scope.StopOnIncorrectAnswer)
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
            return NotAllowedAnswers.filter(function(o,i,r){
				return o.answer == co.answer;
			}).length == 0; //wasn't found
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
		var multiplier =  1;
		var imgdiv = $("#imagediv");		
		if(imgdiv.attr("data-zoomed") != "false")
			return;		
		
		var dimensions = RecalculateImageSize();
		SetImageSize(dimensions.width, -1);
		if($("#qzimage")[0].naturalWidth < 473){
			multiplier = 2;
		}
		dimensions.height =  $("#qzimage")[0].clientHeight + 20;
		
		ResizeViewPort(dimensions.width * multiplier, dimensions.height);
		CorrectImageViewerCSS();
	};
	
	function RecalculateImageSize(){			
		var qzcontainer = $("#qzcontainer")[0];
		var qimg = $("#qzimage");
		if (qimg[0].naturalWidth < 473){
			self.imageWidth = qzcontainer.clientWidth / 4;	
		} else {
			self.imageWidth = qzcontainer.clientWidth / 1.5;
		}
		if(self.imageWidth > qimg[0].naturalWidth && qimg[0].naturalWidth > 472)
			self.imageWidth = $("#qzimage")[0].naturalWidth;
		if (qimg[0].naturalWidth > 373)
			self.imageHeight = (qimg[0].naturalHeight + 20)/ (qimg[0].clientWidth / self.imageWidth) 
		else
			self.imageHeight = qimg[0].clientHeight;
		
		return {
			width: self.imageWidth,
			height: self.imageHeight
		};
	};
		
	function SetImageSize(width, height){
		var qz = $("#qzimage");			
		qz.css("width", ((width != -1)? width + "px": "auto"));
		qz.css("height", ((height != -1)? height + "px": "auto"));
		return;
	};
	
	function ResizeViewPort(imageWidthParm,height){
		$("#imagediv").css("overflow-x", "scroll");
		$("#imagediv").css("overflow-y", "hidden");		
		$("#imagediv").css("width", imageWidthParm / 2);
		$("#imagediv").css("height", height);
		
		return;
	};
	
	function getScreenHeight(){
		return window.innerHeight|| d.getElementsByTagName('body')[0].clientHeight|| document.clientHeight; 
	}
	
	function getScreenWidth(){
		return window.innerWidth|| d.getElementsByTagName('body')[0].clientWidth || document.clientWidth; 
	}
	
	function ImageZoom_OnClick(){		
		var shadowimg = $("#imagediv");
		var newshow = shadowimg.attr("data-zoomed") == "false" ? true: false;
		shadowimg.attr("data-zoomed", newshow);
		var container = $("#qzcontainer")[0];
		var qzimage = $("#qzimage");
		var screenHeight = getScreenHeight() - 100;		
		
		if(newshow){			
			shadowimg.css("display", "block");
			shadowimg.css("position", "absolute");			
			shadowimg.css("top", "0px");
			shadowimg.css("left", "0px");
			
			if(qzimage.clientWidth > qzimage.clientHeight)
			{		
				SetImageSize((container.clientWidth * 2), -1);
				ResizeViewPort(qzimage.clientWidth, ih);
			} else {
				$("#viewportimgzoom").css("display", "block");
				SetImageSize(-1, screenHeight);
				ResizeViewPort(qzimage[0].clientWidth, screenHeight+30);
			}
			
			if(shadowimg[0].clientWidth < getScreenWidth())
				shadowimg.css("left", (getScreenHeight() /2) - (shadowimg[0].clientWidth / 2) + "px");
			
		} else {
			$("#viewportimgzoom").css("display", "none");
			shadowimg.css("left", "0px");
			shadowimg.css("display", "block");
			shadowimg.css("position", "relative");
			SetImageSize(-1, -1);
			
			Window_OnResize();			
		}
		CorrectImageViewerCSS();
		return;
	};
	
	function ImageZoom_OnClickB(){		
		var shadowimg = $("#shadowimg");
		var newshow = shadowimg.attr("data-show") == "false" ? true: false;
		var container = $("#qzcontainer")[0];
		var qzimage = $("#qzimage");
		shadowimg.attr("data-show", newshow);
		
		if(newshow){
			shadowimg.css("display", "block");
			shadowimg.css("position", "absolute");
			shadowimg.css("left", "0px");
			shadowimg.css("top", "0px");									
			shadowimg.css("width", container.clientWidth - 5 + "px");
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
	
	function CorrectImageViewerCSS(){
		CorrectStudyImageScrollPosition();
		CorrectViewPortImgZoomWidth();
	};
	
	function CorrectStudyImageScrollPosition(){
		var curobj = $("#imagediv")[0];
		if(curobj.scrollLeft != 0)
			curobj.scrollLeft = curobj.clientWidth;
		return;
	};
	
	function CorrectViewPortImgZoomWidth(){
		var wid = $("#qzimage")[0].clientWidth;		
		$("#viewportimgzoom").css("width", wid + "px");		
		return;
	};
	
	function StudyImage_OnClick(){
		var curobj = $("#imagediv")[0];
		var curpos = curobj.scrollLeft;
		if(curpos == 0)
			curobj.scrollLeft = curobj.clientWidth;
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
	$("#qzimage").on('load', function(){	
		quizApp.Window_OnResize();
	});
		
});