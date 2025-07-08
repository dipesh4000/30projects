const questions = [{
    question: "Which is largest animal in the world?",
    options: [
        {text: "Shark", correct: false},
        {text: "Blue Whale", correct: true},
        {text: "Elephant", correct: false},
        {text: "Giraffe", correct: false}
    ]},
    // {
    //     question: "Which is the smallest country in the world?",
    //     options: [
    //         {text: "Vatican City", correct: true},
    //         {text: "Bhutan", correct: false},
    //         {text: "Nepal", correct: false},
    //         {text: "Sri Lanka", correct: false},
    //     ]
        
    // },
    // {
    //     question: "Which is the largest desert in the world?",
    //     options: [
    //         {text: "Kalahari", correct: false},
    //         {text: "Gobi", correct: false},
    //         {text: "Sahara", correct: false},
    //         {text: "Antartica", correct: true},
    //     ]
    // },
    // {
    //     question: "Which is the smallest continent in the world",
    //     options: [
    //         {text: "Asia", correct: false},
    //         {text: "Australia", correct: true},
    //         {text: "Arctic", correct: false},
    //         {text: "Africa", correct: false},
    //     ]
    // }

];
const questionelement = document.getElementById("question");
const answerbuttons = document.getElementById("answer-buttons");
const nextbutton = document.getElementById("next-btn");
let score, currentquestionindex;
function startquiz() {
    score = 0;
    currentquestionindex = 0;
    nextbutton.innerText = "Next";
    showquestion();
}

function showquestion() {
    resetstate();
    var currentques = questions[currentquestionindex];
    questionelement.innerText = currentques.question;
    
    currentques.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option.text;
        button.className = "btn";
    
    if(option.correct) {
        button.dataset.correct = option.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerbuttons.appendChild(button);
    });

}
function resetstate() {
    nextbutton.style.display = "none";
    while(answerbuttons.firstChild) {
        answerbuttons.removeChild(answerbuttons.firstChild);
    }

}
function selectAnswer(e) {
    if(e.target.dataset.correct) {
        e.target.style.background = "green";
        score++;
    }
    else{
        e.target.style.background = "red";
    }
    Array.from(answerbuttons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.style.background = "green";
        }
        button.disabled = true;
    });
    nextbutton.style.display = "block";
}
function handlenextbutton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showquestion();
    }
    else {
        showscore();
    }

}
function showscore() {
    resetstate();

    questionelement.innerText = `Your Score is ${score} out of ${questions.length}`;
    nextbutton.innerText = "Play Again";
    nextbutton.style.display = "block";
}
nextbutton.addEventListener("click", () => {
    if(currentquestionindex < questions.length){
        handlenextbutton();
    }
    else {
        startquiz();
    }
});

startquiz();