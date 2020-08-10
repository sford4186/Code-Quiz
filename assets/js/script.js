//Declare Variables
var button = document.querySelector("#start")
var startScreen = document.querySelector("#startScreen")
var gameBoard = document.querySelector("#gameBoard")
var timerEl = document.querySelector("#timer")
var spanEl = document.querySelector("#question")
var nextButton = document.querySelector("#next")
var timer
var secondsLeft = 15
var button1 = document.querySelector("#button0")
var button2 = document.querySelector("#button1")
var button3 = document.querySelector("#button2")
var button4 = document.querySelector("#button3")
var answerEl = document.querySelector("#answer")
var scoreEl = document.querySelector("#score")
var highscoreLi=document.querySelector("#highscorelink")

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
    window.open("highscoreStore.html");
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


    //start timer
    timer()

    
    
    
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

    if (count < 4){

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
        score = score - 10




    } else {
        answerEl.textContent = "Correct!"
        score = score + 10
        
        


    }

    scoreEl.textContent = "Score:  " + score
    localStorage.setItem("scoreEl", score);
    
    //user click
    console.log(event.target.innerText)
    console.log(scoreEl)

    //my answer
    console.log(questions[count].answer)

}

nextButton.addEventListener("click", question)

button.addEventListener("click", startGame)



