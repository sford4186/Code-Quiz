var button=document.querySelector("#start")
var startScreen = document.querySelector("#startScreen")
var gameBoard = document.querySelector("#gameBoard")
var timerEl=document.querySelector("#timer")
var spanEl = document.querySelector("#question")
var nextButton = document.querySelector("#next")
var timer
var secondsLeft = 10

var questions = [
    {
        question : "blah blah",
        answer: [1,2,3,4],
        actualAnswer: 2
    },
    {
        question : "blah blah 2",
        answer: [1,2,3,4],
        actualAnswer: 2
    },
    {
        question : "blah blah 3",
        answer: [1,2,3,4],
        actualAnswer: 2
    }
]

var count = 0 

function endGame() {
    console.log('ended')
}


function timer(){
    timer=setInterval(
        function(){
            secondsLeft--
            timerEl.textContent= "Seconds Left: " + secondsLeft
            if(secondsLeft===0){
                endGame()
                clearInterval(timer)
            }            
        }, 1000
    )
}


function startGame(){
   //clear existing html
    startScreen.setAttribute('style',"display:none;")
    gameBoard.setAttribute('style', 'display:block')
   //start timer
   timer()
   //ask first question 
   spanEl.textContent=questions[count].question
}


function question(){
    count++
    spanEl.textContent=questions[count].question
}

nextButton.addEventListener("click",question)

button.addEventListener("click",startGame)