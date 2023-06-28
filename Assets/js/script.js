var startBtn= document.querySelector("#startbtn");
var startQuiz= document.querySelector(".start-quiz");
var questionContainer=document.querySelector(".question-page");
var questionTitle=document.querySelector(".questionTitle");
var optionGrid=document.querySelector(".optionGrid");
var btn1= document.querySelector("#btn1");
var btn2= document.querySelector("#btn2");
var btn3= document.querySelector("#btn3");
var btn4= document.querySelector("#btn4");
var endPage= document.querySelector(".finish-quiz-page");

var index=0;
var score=0;
function beginQuiz (){

    questionContainer.classList.replace("hide","show")
//when the index is the same as the last index of the array, it will end the quiz
    if(index===questions.length){
        endQuiz()
    }
    
    questionTitle.textContent=questions[index].question
    btn1.textContent=questions[index].option1
    btn2.textContent=questions[index].option2
    btn3.textContent=questions[index].option3
    btn4.textContent=questions[index].option4

}
// checks the answer with an if statement and adds pts to score
function checkAnswer(answer){
    if (answer===questions[index].correct){
        index++
        score++
        beginQuiz()
    }
    else {
        index++
        beginQuiz()
    }
}

function endQuiz(){
    questionContainer.style.display="none"
    endPage.classList.replace("hide","show")

}

//listens for event on a page
startBtn.addEventListener("click",()=>{ 
    startQuiz.classList.add("hide")
    beginQuiz()
})

optionGrid.addEventListener("click",()=>{
    var btnClicked= event.target.textContent
    checkAnswer(btnClicked)
})

const startingTime = 5;
let time = startingTime * 60; 
const countdownTimerEl = document.getElementById('countdownTimer');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    countdownTimerEl.innerHTML =`${minutes}: ${seconds}`;
    time--;
}
