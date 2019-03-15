"use strict"

window.onload = function () {
    document.getElementById('multipleChoice').style.display = "none";
    document.getElementById('multiAnswers').style.display = "none";

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
    document.getElementById("takeTest").onclick = buildQuiz;
    document.getElementById("rightArrow").onclick = showNextQuestion;
    document.getElementById("leftArrow").onclick = showPreviousQuestion;
    document.getElementById("first").onclick = showFirstQuestion;
    document.getElementById("last").onclick = showLastQuestion;
    var homePage = document.getElementsByClassName('home');
    homePage[0].onclick = returnHome;
    homePage[1].onclick = returnHome;
}

var allQuestions = [{
    question: "Which is a color?", type: 1, choice1: "fish", choice2: "green", choice3: "house",
    choice4: "fence", questAnswer: "choice2"
}, {
    question: "Which lives in the ocean?", type: 2,
    choice1: "fish", choice2: "frog", choice3: "cat", choice4: "dog", questAnswer: ("choice1", "choice2")
},
{ question: "Is the sky blue?", type: 3, choice1: "True", choice2: "False", choice3: "True" }];

for (let i = 0; i < allQuestions.length; i++) {
    console.log(allQuestions[0].question1);
}
var userAnswers = [];
var answerStatus = []; // (boolean array) should be the size of allQuestion array
var counter = 0;

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

function hideElements(){
    document.getElementById('multipleChoice').style.display = "none";

}

function buildQuiz() {
    var question = document.getElementById('question').getElementsByTagName('h2');
    var multiChoice = document.getElementsByClassName('mChoices');
    question[0].innerHTML = allQuestions[counter].question;
    if (allQuestions[counter].type == 1) {
        var index = 0;
        document.getElementById('multipleChoice').style.display = "block";
        multiChoice[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice4;
        index++;
    }
}

function submitAnswer(){
    var index = 0;
    var formResults = document.getElementById('multipleChoice').getElementsByTagName('input');
    var valueResults = document.getElementById('multipleChoice').getElementsByTagName('h2');
    for(let i = 0; i < formResults.length; i++){
        if(formResults[i].checked == true)
            index = i;
    }
    alert(valueResults[index].innerHTML);
}

function randomizeQuiz() {

}

function showInstanceFeedback() {

}

function showAllResults() {

}

function showFirstQuestion() {
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[0].question;
}

function showLastQuestion() {
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[allQuestions.length - 1].question;
}

function showNextQuestion() {
    counter++;
    var question = document.getElementById('question').getElementsByTagName('h2');
    var multiChoice = document.getElementsByClassName('mChoices');
    question[0].innerHTML = allQuestions[counter].question;
    if (allQuestions[counter].type == 1) {
        var index = 0;
        multiChoice[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice4;
        index++;
    }
    else if(allQuestions[counter].type == 2){
        var index = 0;
        hideElements();
        var multiAnswer = document.getElementsByClassName('mAnswer');
        document.getElementById('multiAnswers').style.display = "block";
        multiAnswer[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice4;
        index++;
        document.getElementById('multiAnwsers').style.display = "block";
    }
}

function showPreviousQuestion() {
    counter--;
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[counter].question;
}

function showStatusBar() {

}