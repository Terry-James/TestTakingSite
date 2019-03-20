"use strict"
// used to load all the buttons once the page has loaded
window.onload = function () {
    hideElements();
    hideAnswers();
    document.getElementById('mcButton').onclick = submitAnswer;
    document.getElementById('maButton').onclick = submitAnswer;
    document.getElementById('tfButton').onclick = submitAnswer;
    document.getElementById('fillBlankButton').onclick = submitAnswer;

    document.getElementById('adding').onclick = addQuestion;
    document.getElementById("multiButton").onclick = addingMultiChoice;
    document.getElementById("answerButton").onclick = addingMultiAnswer;
    document.getElementById("trueButton").onclick = addingTrueFalse;
    document.getElementById("fillButton").onclick = addingFillBlank;
    document.getElementById("testTaker").onclick = testLayout;
    document.getElementById("adminButton").onclick = adminLayout;
    document.getElementById("takeTest").onclick = buildQuiz;
    document.getElementById("rightArrow").onclick = showNextQuestion;
    document.getElementById("leftArrow").onclick = showPreviousQuestion;
    document.getElementById("first").onclick = showFirstQuestion;
    document.getElementById("last").onclick = showLastQuestion;
    document.getElementById("quizSubmit").onclick = showAllResults;
    document.getElementById("createMultiQuestion").onclick = addMultipleChoice;
    document.getElementById("createMultiAnswer").onclick = addMultipleAnswer;
    document.getElementById("createTrueFalse").onclick = addTrueFalse;
    document.getElementById("createFillBlank").onclick = addFillBlank;
    document.getElementById("delete").onclick = deleteQuestion;
    document.getElementById("deleteAQuestion").onclick = deleteHelper;
    document.getElementById("update").onclick = updateQuestion;
    document.getElementById("updateAQuestion").onclick = updateHelper;


    var homePage = document.getElementsByClassName('home');
    homePage[0].onclick = returnHome;
    homePage[1].onclick = returnHome;
    document.getElementById('question');
    document.getElementById('answer');
    document.getElementById('submit');
}

// create an array of question objects by using key and value pairing
var allQuestions = [{
    question: "Which is a color?", type: 1, choice1: "fish", choice2: "green", choice3: "house",
    choice4: "fence", questAnswer: "green"
},
{
    question: "Which lives in the ocean?", type: 2,
    choice1: "fish", choice2: "frog", choice3: "cat", choice4: "dog", questAnswer: ["fish", "frog"]
},
{ question: "Is the sky blue?", type: 3, choice1: "True", choice2: "False", questAnswer: "True" },
{ question: "How many days in a year?", type: 4, questAnswer: 365 }];

// Global variables used in various functions
var userAnswers = [];
var counter = 0;
var correct = 0;
var incorrect = 0;
var questionNum = 1;
var index = 0;
var instanceIndex = 0;

// retrieve the test layout if the tester button is pressed on main 
function testLayout() {
    document.getElementById('opener').style.display = "none";
    document.getElementById('testNav').style.display = "block";
    document.getElementById('testingDiv').style.display = "block";
}

// retrieve the admin layout if the admin button is pressed on main
function adminLayout() {
    document.getElementById('opener').style.display = "none";
    document.getElementById('adminNav').style.display = "block";

}

// return to main 
function returnHome() {
    location = "index.html";
}

// retrieve the options for what kind of question to add
function addQuestion() {
    document.getElementById('deleteQuestion').style.display = "none";
    document.getElementById('updateQuestion').style.display = "none";
    document.getElementById('multi').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "none";
    document.getElementById('fillBlank').style.display = "none";
    document.getElementById('selection').style.display = "block";
}

// show the template for adding a multiple choice question
function addingMultiChoice() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('multi').style.display = "block";

}

// the add helper function for adding a new multiple choice question
function addMultipleChoice() {
    var userInputs = document.getElementById('multi').getElementsByTagName('input');
    allQuestions[allQuestions.length] = { // creates an object using key and value pairing
        question: userInputs[0].value, type: userInputs[1].value, choice1: userInputs[2].value,
        choice2: userInputs[3].value, choice2: userInputs[4].value, choice2: userInputs[5].value, questAnswer: userInputs[6].value
    };
    addQuestion(); // move back to selection menu
}

// retrieve template for adding a multiple answer question
function addingMultiAnswer() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "block";
}

// add helper function for adding a multiple answer question
function addMultipleAnswer() { 
    var userInputs = document.getElementById('multAns').getElementsByTagName('input');
    allQuestions[allQuestions.length] = { // creates an object using key and value pairing
        question: userInputs[0].value, type: userInputs[1].value, choice1: userInputs[2].value,
        choice2: userInputs[3].value, choice2: userInputs[4].value, choice2: userInputs[5].value,
        questAnswer: userInputs[6].value
    };
    addQuestion();// move back to selection menu
}

// retrieve the template for adding a true or false question
function addingTrueFalse() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "block";
}

// add helper function for adding a true or false question
function addTrueFalse() {
    var userInputs = document.getElementById('trueOrFalse').getElementsByTagName('input');
    allQuestions[allQuestions.length] = { // creates an object using key and value pairing
        question: userInputs[0].value, type: userInputs[1].value, choice1: "True",
        choice2: "False", questAnswer: userInputs[2].value
    };
    addQuestion(); // move back to selection menu
}

// retreive the fill in the blank template 
function addingFillBlank() {
    document.getElementById('selection').style.display = "none";
    document.getElementById('fillBlank').style.display = "block";
}

// add helper function for adding a fill in the blank question
function addFillBlank() {
    var userInputs = document.getElementById('fillBlank').getElementsByTagName('input');
    allQuestions[allQuestions.length] = { // creates an object using key and value pairing
        question: userInputs[0].value, type: userInputs[1].value, questAnswer: userInputs[2].value
    };
    addQuestion(); // move back to selection menu
}

// retreive the delete template
function deleteQuestion() {
    document.getElementById('updateQuestion').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('deleteQuestion').style.display = "block";

}
// helper for deleting a question
function deleteHelper() {
    var result = document.getElementById('deleteQuestion').getElementsByTagName('input');
    for (let i = 0; i < allQuestions.length; i++) {
        if (result[0].value - 1 == (i)) { // if the index-1 is equal to the user input the set that question to empty
            allQuestions[i] = " ";
        }
    }
}

// retreive template for updating a question
function updateQuestion() {
    document.getElementById('deleteQuestion').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('updateQuestion').style.display = "block";
}

// helper for updating a question
function updateHelper() {
    var typeOf = 0;
    var result = document.getElementById('updateQuestion').getElementsByTagName('input');
    for (let i = 0; i < allQuestions.length; i++) {
        if (result[0].value - 1 == (i)) {
            typeOf = allQuestions[i].type; // typeOf should equal the type of the question based on the question number
        }
    }
}

// helper function to hide all the elements at once
function hideElements() {
    document.getElementById('finalResults').style.display = "none";
    document.getElementById('nav').style.display = "none";
    document.getElementById('testNav').style.display = "none";
    document.getElementById('testingDiv').style.display = "none";
    document.getElementById('adminNav').style.display = "none";
    document.getElementById('multi').style.display = "none";
    document.getElementById('selection').style.display = "none";
    document.getElementById('multAns').style.display = "none";
    document.getElementById('trueOrFalse').style.display = "none";
    document.getElementById('fillBlank').style.display = "none";
    document.getElementById('blankAnswer').style.display = "none";
    document.getElementById('deleteQuestion').style.display = "none";
    document.getElementById('updateQuestion').style.display = "none";
}

// helper to hide all the answers at once
function hideAnswers() {
    document.getElementById('multipleChoice').style.display = "none";
    document.getElementById('multiAnswers').style.display = "none";
    document.getElementById('tF').style.display = "none";
    document.getElementById('blankAnswer').style.display = "none";
}

// starts the quiz by giving the first question
function buildQuiz() {
    var question = document.getElementById('question').getElementsByTagName('h2');
    document.getElementById('questNum').innerHTML = questionNum; // display the question number
    var multiChoice = document.getElementsByClassName('mChoices');
    question[0].innerHTML = allQuestions[counter].question; // display the current question
    document.getElementById('nav').style.display = "block";
    if (allQuestions[counter].type == 1) { // type 1 is multiple choice
        document.getElementById('multipleChoice').style.display = "block";
        multiChoice[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiChoice[index].innerHTML = allQuestions[counter].choice4;
    }
}

// used to submit the answer of each question
function submitAnswer() {
    var questionType;
    questionType = allQuestions[counter].type;
    var indexArray = [];
    var correctIndex = 0;
    var trueIndex = 0;
    if (questionType == 1) { // multiple choice
        var formResults = document.getElementById('multipleChoice').getElementsByTagName('input');
        var valueResults = document.getElementById('multipleChoice').getElementsByTagName('h2');
        for (let i = 0; i < formResults.length; i++) {
            if (formResults[i].checked == true)
                correctIndex = i;
        }
        userAnswers[userAnswers.length] = valueResults[correctIndex].innerHTML;
        showInstanceFeedback(valueResults[correctIndex].innerHTML, questionType); // checks whether correct or incorrect
        showNextQuestion(); // move to next question
    }
    else if (questionType == 2) { // multiple answer
        var multiAnswerArray = [];
        var formResults = document.getElementById('multiAnswers').getElementsByTagName('input');
        var valueResults = document.getElementById('multiAnswers').getElementsByTagName('h2');
        for (let i = 0; i < formResults.length; i++) {
            if (formResults[i].checked == true) {
                indexArray[trueIndex] = i;
                trueIndex++;
            }
        }
        for (let i = 0; i < indexArray.length; i++) { // used to collect all the answers and pass them all at once to be checked
            userAnswers[userAnswers.length] = valueResults[indexArray[i]].innerHTML;
            multiAnswerArray[i] = valueResults[indexArray[i]].innerHTML;
        }
        showInstanceFeedback(multiAnswerArray, questionType); // checks whether correct or incorrect
        showNextQuestion(); // move to next question
    }
    else if (questionType == 3) { // true or false
        var formResults = document.getElementById('tF').getElementsByTagName('input');
        var valueResults = document.getElementById('tF').getElementsByTagName('h2');
        for (let i = 0; i < formResults.length; i++) {
            if (formResults[i].checked == true) {
                userAnswers[userAnswers.length] = valueResults[i].innerHTML;
                showInstanceFeedback(valueResults[i].innerHTML, questionType); // checks whether correct or incorrect
            }
        }
        showNextQuestion(); // move to next question
    }
    else { // fill in the blank
        var formResults = document.getElementById('blankAnswer').getElementsByTagName('input');
        userAnswers[userAnswers.length] = formResults[0].value;
        showInstanceFeedback(formResults[0].value, questionType); // checks whether correct or incorrect
    }
}

// function to find out whether user answer is correct or not
function showInstanceFeedback(results, type) {
    var instResult = document.getElementById('progress').getElementsByTagName('li');
    if (type == 1) { // check multiple choice answer
        if (allQuestions[counter].questAnswer == results) { //check correct answer with what the user said
            correct++;
            instResult[1].innerHTML = correct;
            alert("correct");
        }
        else {
            incorrect++;
            instResult[3].innerHTML = incorrect;
            alert("incorrect");
        }
    }
    else if (type == 2) { // check multiple answer answers
        var right = 0;
        var wrong = 0;
        for (let i = 0; i < results.length; i++) {
            if (allQuestions[counter].questAnswer[instanceIndex] == results[i]) {
                instanceIndex++;
                right++;
            }
            else {
                incorrect++;
                wrong++;
                instResult[3].innerHTML = incorrect;
                alert("incorrect");
            }
        }
        if (wrong <= 0) { // if no wrong answers were found then the question was answered correct
            correct++;
            instResult[1].innerHTML = correct;
            alert("correct");
        }
    }
    else if (type == 3) { // check true or false answer
        if (allQuestions[counter].questAnswer == results) {
            correct++;
            instResult[1].innerHTML = correct;
            alert("correct");
        }
        else {
            incorrect++;
            instResult[3].innerHTML = incorrect;
            alert("incorrect");
        }
    }
    else { // check fill in the blank answer
        if (allQuestions[counter].questAnswer == results) {
            correct++;
            instResult[1].innerHTML = correct;
            alert("correct");
        }
        else {
            incorrect++;
            instResult[3].innerHTML = incorrect;
            alert("incorrect");
        }
    }
}

// used to show the final results of the test
function showAllResults() {
    document.getElementById('nav').style.display = "none";
    document.getElementById('progress').style.display = "none";
    document.getElementById('question').style.display = "none";
    document.getElementById('answers').style.display = "none";
    document.getElementById('finalResults').style.display = "block";
    var displayTags = document.getElementById('finalResults').getElementsByTagName('h3');
    var paragraphTag = document.getElementById('answersGiven');
    displayTags[0].innerHTML = correct;
    displayTags[1].innerHTML = incorrect;
    for (let i = 0; i < userAnswers.length; i++) { // display all of the testers answers that they gave
        paragraphTag.innerHTML += (userAnswers[i] + ",");
    }
}

// shows the first question (used for first question button)
function showFirstQuestion() {
    questionNum = 1;
    index = 0;
    counter = 0;
    hideAnswers();
    document.getElementById('questNum').innerHTML = questionNum;
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[0].question;
    var multiChoice = document.getElementsByClassName('mChoices');
    question[0].innerHTML = allQuestions[counter].question;
    document.getElementById('multipleChoice').style.display = "block";
    multiChoice[index].innerHTML = allQuestions[counter].choice1;
    index++;
    multiChoice[index].innerHTML = allQuestions[counter].choice2;
    index++;
    multiChoice[index].innerHTML = allQuestions[counter].choice3;
    index++;
    multiChoice[index].innerHTML = allQuestions[counter].choice4;

}

// shows the last question in the array (used for last question button)
function showLastQuestion() {
    questionNum = allQuestions.length;
    hideAnswers();
    document.getElementById('questNum').innerHTML = questionNum;
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[allQuestions.length - 1].question;
    document.getElementById('tF').style.display = "block";
}

// shows the next question in the array (used for the next button)
function showNextQuestion() {
    questionNum++;
    counter++;
    hideAnswers();
    index = 0;
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[counter].question;
    document.getElementById('questNum').innerHTML = questionNum;

    if (allQuestions[counter].type == 2) {
        var multiAnswer = document.getElementsByClassName('mAnswer');
        document.getElementById('multiAnswers').style.display = "block";
        multiAnswer[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice4;
    }
    else if (allQuestions[counter].type == 3) {
        document.getElementById('tF').style.display = "block";
    }
    else {
        document.getElementById('blankAnswer').style.display = "block";
    }
}

// shows the previous question in the array (used for the previous button)
function showPreviousQuestion() {
    questionNum--;
    counter--;
    hideAnswers();
    document.getElementById('questNum').innerHTML = questionNum;
    var question = document.getElementById('question').getElementsByTagName('h2');
    question[0].innerHTML = allQuestions[counter].question;
    if (allQuestions[counter].type == 1) {
        var multipleChoice = document.getElementsByClassName('mChoices');
        document.getElementById('multipleChoice').style.display = "block";
        multipleChoice[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multipleChoice[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multipleChoice[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multipleChoice[index].innerHTML = allQuestions[counter].choice4;
    }
    else if (allQuestions[counter].type == 2) {
        var multiAnswer = document.getElementsByClassName('mAnswer');
        document.getElementById('multiAnswers').style.display = "block";
        multiAnswer[index].innerHTML = allQuestions[counter].choice1;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice2;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice3;
        index++;
        multiAnswer[index].innerHTML = allQuestions[counter].choice4;
    }
    else if (allQuestions[counter].type == 3) {
        document.getElementById('tF').style.display = "block";
    }

}
