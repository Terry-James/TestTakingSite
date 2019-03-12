"use strict"

window.onload = function(){
    document.getElementById('multi').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "none";
    document.getElementById('fillBlank').style.display = "none";
    document.getElementById('shortAnswer').style.display = "none";
    document.getElementById('adding').onclick = addQuestion;
    document.getElementById('question');
    document.getElementById('answer');
    document.getElementById('submit');
     
    document.getElementById("multiButton").onclick = addingMultiChoice;
    document.getElementById("answerButton").onclick = addingMultiAnswer;
    document.getElementById("trueButton").onclick = addingTrueFalse;
    document.getElementById("fillButton").onclick = addingFillBlank;
    document.getElementById("shortButton").onclick = addingShortAnswer;
    document.getElementById("home").onclick = returnHome;
    
    var allQuestions = [];
    var userAnswers = [];
    var answerStatus = []; // (boolean array) should be the size of allQuestion array
}

function returnHome(){
    location = "index.html";
}

function addQuestion(){
    document.getElementById('multi').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "none";
    document.getElementById('fillBlank').style.display = "none";
    document.getElementById('shortAnswer').style.display = "none";
    document.getElementById('selection').style.display = "block";
}

function addingMultiChoice(){
    document.getElementById('selection').style.display = "none";   
    document.getElementById('multi').style.display = "block";

}

function addingMultiAnswer(){
    document.getElementById('selection').style.display = "none";   
    document.getElementById('multAns').style.display = "block";
}

function addingTrueFalse(){
    document.getElementById('selection').style.display = "none";   
    document.getElementById('trueOrFalse').style.display = "block";
}

function addingFillBlank(){
    document.getElementById('selection').style.display = "none";   
    document.getElementById('fillBlank').style.display = "block";
}

function addingShortAnswer(){
    document.getElementById('selection').style.display = "none";   
    document.getElementById('shortAnswer').style.display = "block";
}

function deleteQuestion(){
    
}

function updateQuestion(){

}

function buildQuiz(){

}

function randomizeQuiz(){

}

function showInstanceFeedback(){

}

function showAllResults(){

}

function showNextQuestion(){

}

function showPreviousQuestion(){

}

function showStatusBar(){

}