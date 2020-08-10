//Declare Variables
var button = document.querySelector("#start")
var startScreen = document.querySelector("#startScreen")
var gameBoard = document.querySelector("#gameBoard")
var highscoreboard = document.querySelector("#highscoreboard")
var timerEl = document.querySelector("#timer")
var spanEl = document.querySelector("#question")
//var nextButton = document.querySelector("#next")
var timer
var secondsLeft = 45
var button1 = document.querySelector("#button0")
var button2 = document.querySelector("#button1")
var button3 = document.querySelector("#button2")
var button4 = document.querySelector("#button3")
var answerEl = document.querySelector("#answer")
var scoreEl = document.querySelector("#score")
var highscoreLi = document.querySelector("#highscorelink")
var form = document.querySelector("#form-grid")
var endScreen = document.querySelector("#endGame")
var score = 0
var count = 0

//Set question object with question, options, and the correct answer
var questions = [
    {
        question: "Inside which HTML element do we put the Javascript?",
        choices: ["<javascript>", "<js>", "<script>", "<scripting>"],
        answer: "<script>"

    },
    {
        question: "What does CSS stand for?",
        choices: ["Colorful Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        choices: ["<style>", "<css>", "<script>", "<head>"],
        answer: "<style>"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    }
]

//end Game when timer ends
function endGame() {
    console.log('ended')
    scoreEl.textContent = "Score:  " + secondsLeft
    // window.open("highscoreStore.html");
    endScreen.classList.remove("d-none")
    gameBoard.classList.add("d-none")
    clearInterval(timer)
}

//Timer function
function timer() {
    timer = setInterval(
        function () {
            secondsLeft--
            timerEl.textContent = "Seconds Left: " + secondsLeft
            if (secondsLeft === 0) {
                endGame()
                clearInterval(timer)
            }
        }, 1000
    )
}

function startGame() {
    //clear existing html
    startScreen.setAttribute('style', "display:none;")
    gameBoard.setAttribute('style', 'display:block')
    // highscoreboard.setAttribute('style', 'display:none')

    //start timer
    timer()

    writeQuestion()
}
function writeQuestion() {

    //ask first question 
    spanEl.textContent = questions[count].question

    //show button options
    button1.textContent = questions[count].choices[0]
    button2.textContent = questions[count].choices[1]
    button3.textContent = questions[count].choices[2]
    button4.textContent = questions[count].choices[3]
    console.log(answer)

    //capture user button clicks
    button1.addEventListener("click", showAnswer)
    button2.addEventListener("click", showAnswer)
    button3.addEventListener("click", showAnswer)
    button4.addEventListener("click", showAnswer)

}

//Present question and answer choices

function question() {

    count++

    if (count < 4) {

        spanEl.textContent = questions[count].question
        button1.textContent = questions[count].choices[0]
        button2.textContent = questions[count].choices[1]
        button3.textContent = questions[count].choices[2]
        button4.textContent = questions[count].choices[3]
        console.log(questions[count].answer)

        //capture user button clicks
        button1.addEventListener("click", showAnswer)
        button2.addEventListener("click", showAnswer)
        button3.addEventListener("click", showAnswer)
        button4.addEventListener("click", showAnswer)
    }
    else {
        endGame()
    }

}

function showAnswer(event) {
    event.preventDefault()


    console.log(scoreEl)

    if (event.target.innerText != questions[count].answer) {

        answerEl.textContent = "Incorrect!"
        //score = score - 10
        secondsLeft = secondsLeft - 10
        


    } else {
        answerEl.textContent = "Correct!"
        
    }
    if (secondsLeft < 0) {
        clearInterval(timer)
        secondsLeft = 0
        timerEl.textContent = "Seconds Left: " + secondsLeft
        endGame()
    }


    //user click
    console.log(event.target.innerText)
    console.log(scoreEl)

    //my answer
    console.log(questions[count].answer)
    count++
    if (count === questions.length) {
        endGame()
    }
    else {
        writeQuestion()
    }

}

var submitEl = document.querySelector("#submit");
var nameInputEl = document.querySelector("#name")
var highscoreEl = document.querySelector("#highscore")
var highscorelist



var submissionResponseEl = document.querySelector("#response");


submitEl.addEventListener("click", function (event) {
    event.preventDefault();

    console.log(event);


    var response2 = nameInputEl.value
    var response = "Thank you for your submission " + nameInputEl.value + "!"
    submissionResponseEl.textContent = response;

    submitEl.disabled = true;
    console.log(nameInputEl.value + secondsLeft);
    //var highscore = nameInputEl.value + " score: "+ scorestorage
    highscoreEl.textContent = "Your score is: " + secondsLeft

    //check for existing highscores if they dont exist create empty array 
    if (response2.length === 0) {
        alert("you must provide initials")
        return
    }
    highscorelist = JSON.parse(localStorage.getItem("highscores")) || []

    var newScore = { initials: response2, score: secondsLeft}

    highscorelist.push(newScore)

    localStorage.setItem("highscore", JSON.stringify(highscorelist));
    // var list = highscorelist
    // highscorelist.push(response2 + "-" + scorestorage + " points")
    // console.log(highscorelist)
    // localStorage.setItem("highscorelist", list)
    window.location = "./highscore.html"
});







//nextButton.addEventListener("click", question)

button.addEventListener("click", startGame)
