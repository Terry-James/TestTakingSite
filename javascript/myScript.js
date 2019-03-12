"use strict"

window.onload = function () {
    document.getElementById('testNav').style.display = "none";
    document.getElementById('testingDiv').style.display = "none";
    document.getElementById('adminNav').style.display = "none";
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
    document.getElementById("testTaker").onclick = testLayout;
    document.getElementById("adminButton").onclick = adminLayout;
    var homePage = document.getElementsByClassName('home');
    homePage[0].onclick = returnHome;
    homePage[1].onclick = returnHome;

    var allQuestions = [];
    var userAnswers = [];
    var answerStatus = []; // (boolean array) should be the size of allQuestion array
}

function testLayout() {
    document.getElementById('opener').style.display = "none";
    document.getElementById('testNav').style.display = "block";
    document.getElementById('testingDiv').style.display = "block";

}

function adminLayout() {
    document.getElementById('opener').style.display = "none";
    document.getElementById('adminNav').style.display = "block";

}

function returnHome() {
    location = "index.html";
}

function addQuestion() {
    document.getElementById('multi').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "none";
    document.getElementById('fillBlank').style.display = "none";
    document.getElementById('shortAnswer').style.display = "none";
    document.getElementById('selection').style.display = "block";
}

function addingMultiChoice() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('multi').style.display = "block";

}

function addingMultiAnswer() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "block";
}

function addingTrueFalse() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "block";
}

function addingFillBlank() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('fillBlank').style.display = "block";
}

function addingShortAnswer() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('shortAnswer').style.display = "block";
}

function deleteQuestion() {

}

function updateQuestion() {

}

function buildQuiz() {

}

function randomizeQuiz() {

}

function showInstanceFeedback() {

}

function showAllResults() {

}

function showNextQuestion() {

}

function showPreviousQuestion() {

}

function showStatusBar() {

}