'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('qzApp', []);

app.filter('pct', function () {
    return function (value, nod) {
        return value.toFixed(nod);
    }
});

app.controller("quizController", ['$scope', function($scope){
    
    $scope.SequentialMode = false;
    $scope.StudyMode = true;
    $scope.NumOfChoices = 4;
    $scope.lastResult = {};
	
    $scope.db = [
        {
            qid: 1,
            question: "What is you rname",
            answer: "jerome",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 2,
            question: "How do you do",
            answer: "fine",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 3,
            question: "Foot size",
            answer: "13",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 4,
            question: "Pant Width",
            answer: "34",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        },
        {
            qid: 5,
            question: "",
            answer: "34",
            picture: "12Glyphs.gif",
            hint: "",
            study: ""
        }
    ];
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
        $scope.LoadNextQuestion();
    }
    $scope.Score = function() {
		if ($scope.CorrectAnswers + $scope.IncorrectAnswers == 0)
			return 100;
		return (($scope.CorrectAnswers / ($scope.CorrectAnswers + $scope.IncorrectAnswers)) * 100);
	}
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
        var lQuestion = $scope.GetRandomQuestion();
        $scope.Question = lQuestion;
        if(lQuestion == undefined){
			console.log("Question was not found"); 
		}
		
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
		console.log(randomIX);
		$scope.lstAnswers.splice(randomIX - 1,0, { 
			qid: lQuestion.qid,
			answer: lQuestion.answer
		});
    };
     
    $scope.init();
}]);



