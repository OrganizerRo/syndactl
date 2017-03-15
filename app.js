'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('qzApp', []);

app.controller("quizController", ['$scope', function($scope){
    
    $scope.SequentialMode = false;
    $scope.StudyMode = true;
    $scope.NumOfChoices = 4;
    
    $scope.db = [
        {
            qid: 1,
            question: "What is you rname",
            answer: "jerome",
            picture: "1.gif",
            hint: "",
            study: ""
        },
        {
            qid: 2,
            question: "How do you do",
            answer: "fine",
            picture: "2.gif",
            hint: "",
            study: ""
        },
        {
            qid: 3,
            question: "Foot size",
            answer: "13",
            picture: "3.gif",
            hint: "",
            study: ""
        },
        {
            qid: 4,
            question: "Pant Width",
            answer: "34",
            picture: "4.gif",
            hint: "",
            study: ""
        },
        {
            qid: 5,
            question: "How to process food",
            answer: "with a machine",
            picture: "4.gif",
            hint: "",
            study: ""
        }
    ];
    $scope.Question = {};
    $scope.lstAnswers = [
        
    ];    
    $scope.ResponseMessage = "";
    
    $scope.CorrectAnswers = 0;
    $scope.IncorrectAnswers = 0;
    
    $scope.init = function(){
        $scope.LoadNextQuestion();
    }
    
    $scope.Randomize =  function(start, end) {
        return Math.floor((Math.random() * end) + start);
    };
    
     $scope.RandomizeFrom =  function(arrOfStuff) {
         var aLen = arrOfStuff.length;
         return arrOfStuff[Math.floor((Math.random() * aLen) + 1)];
    };
    
    $scope.QuestionsCount = function(){
        return $scope.db.length;
    };
    
    $scope.TestAnswer = function(qid){        
        $scope.ResponseMessage =  (qid == $scope.Question.qid)? " Correct ! " : " In Correct";
        $scope.LoadNextQuestion();
    };
    
    $scope.GetRandomQuestion = function(){
        var rndQuestionIX = $scope.Randomize(0, $scope.db.length - 1);
        return $scope.db[rndQuestionIX];  //question row object
    };
    
    $scope.GetRandomAnswer = function(NotAllowedAnswers){
        var allowedAnswers = $scope.db.filter(function(co, ix, ar){            
            if(NotAllowedAnswers.length ==0)
                return true;            
            return !NotAllowedAnswers.find(function(ob,x,a){ return ob.qid == co.qid;});
        });
        
        var rndQuestionIX = $scope.Randomize(0, allowedAnswers.length - 1);
        
        return allowedAnswers[rndQuestionIX];
    };
    
    
    $scope.LoadNextQuestion = function(){
        var lQuestion = $scope.GetRandomQuestion();
        $scope.Question = lQuestion;
        
        if($scope.Question == undefined) {
            $scope.ResponseMessage = "Couldn't Load Question";
            alert("stopped");
        };
        
        $scope.lstAnswers = [];
        
        var randomIX = $scope.Randomize(1, $scope.NumOfChoices);
        
        for(var x=0;x < $scope.NumOfChoices;x++){
            var rndAns = $scope.GetRandomAnswer($scope.lstAnswers);
			
            $scope.lstAnswers.push({ 
                    qid: rndAns.qid,
                    answer:rndAns.answer
                });
        };
    };
    
    $scope.PopulateAnswers = function(){
        $scope.lstAnswers = [];                
    };    
    
    $scope.init();
}]);



