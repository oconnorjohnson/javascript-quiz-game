const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript link?",
        a: "<js>",
        b: "<scripting>",
        c: "<javascript>",
        d: "<script>",
        correct: "d",
    },
    {
        question: "Where is the correct place to insert the Javascript <src> tag?",
        a: "The <body> section",
        b: "Both the <head> section and the <body> section", 
        c: "The <head> section",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        a: "<script href='xxx.js'>",
        b: "<script src='xxx.js'>",
        c: "<script name='xxx.js'>",
        d: "<script location='xxx.js'>",
        correct: "b",
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        a: "msg('Hello World');",
        b: "alert('Hello World');",
        c: "msgBox('Hello World');",
        d: "alertBox('Hello World');",
        correct: "b",
    },
    {
        question: "How do you create a function in JavaScript?",
        a: "function = myFunction()",
        b: "function myFunction()",
        c: "function:myFunction()",
        d: "function === myFunction()",
        correct: "b",
    },
    {
        question: "How do you call a function named 'myFunction'?",
        a: "myFunction()",
        b: "call myFunction()",
        c: "call function myFunction()",
        d: "call.myFunction()",
        correct: "a",
    },
    {
        question: "How do you write an 'IF' statement in JavaScript?",
        a: "if i===5 then",
        b: "if i=5 then",
        c: "if (i==5)",
        d: "if i=5",
        correct: "c",
    },
    {
        question: "How do you write an 'IF' statement for executing some code if 'i' is NOT equal to 5?",
        a: "if (i <> 5)",
        b: "if i <> 5",
        c: "if i=! 5 then",
        d: "if (i !=5)",
        correct: "d",
    },
    {
        question: "How does a FOR loop start?",
        a: "for (i = 0; i <= 5; i++)",
        b: "for i = 1 to 5",
        c: "for (i = 0; i<=5)",
        d: "for (i <=5; i++)",
        correct: "a",
    },
    {
        question: "How can you add a comment in JavaScript?",
        a: "<!--This is a comment-->",
        b: "~This is a comment~",
        c: "/*/This is a comment",
        d: "//This is a comment",
        correct: "d",
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        a: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
        b: "var colors =(1:'red', 2:'green', 3:'blue')",
        c: "var colors = ['red', 'green', 'blue']",
        d: "var colors = 'red', 'green', 'blue'",
        correct: "c",
    },
    {
        question: "How do you round the number 7.25 to the nearest integer?",
        a: "rnd(7.25)",
        b: "round(7.25)",
        c: "Math.rnd(7.25)",
        d: "Math.round(7.25)",
        correct: "d",
    },
    {
        question: "How do you find the number with the highest value of x and y?",
        a: "Math.max(x, y)",
        b: "Math.ceil(x, y)",
        c: "ceil(x, y)",
        d: "top(x, y)",
        correct: "a",
    },
    {
        question: "How can you detect the client's browser name?",
        a: "client,navName",
        b: "navigator.appName",
        c: "browser.Name",
        d: "client.browserName",
        correct: "b",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element?",
        a: "onmouseclick",
        b: "onchange",
        c: "onclick",
        d: "onmouseover",
        correct: "c",
    },
    {
        question: "How do you declare a JavaScript variable?",
        a: "variable carName",
        b: "v carName",
        c: "var carName",
        d: "declare.var carName",
        correct: "c",
    },
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "*",
        b: "-",
        c: "x",
        d: "=",
        correct: "d",
    },
    {
        question: "What will the following code return: Boolean(10>9)",
        a: "True",
        b: "False",
        c: "Null",
        d: "NaN",
        correct: "a",
    },
    {
        question: "Are JavaScript identifiers case-sensitive?",
        a: "Sometimes",
        b: "Never",
        c: "Conditionally",
        d: "Always",
        correct: "d",
    },
    {
        question: "The external JavaScript file must contain the <script> tag.",
        a: "True",
        b: "False",
        c: "Conditionally",
        d: "N/A",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const timeEl = document.getElementById('timer')
const submitBtn = document.getElementById('submit')
const startBtn = document.getElementById('start-quiz')
const welcomeDiv = document.getElementById('quiz-welcome')
const quizDiv = document.getElementById('quiz-header')
const form = document.getElementById('form')
const formBlock = document.getElementById('.form')

let currentQuiz = 0
let score = 0
let secondsLeft = 60 


function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left until game ends.";
        //if(secondsLeft===0) {
        if (secondsLeft <= 0 || currentQuiz >= quizData.length) {
            clearInterval(timerInterval)
            loseGame()
        }
    }, 1000) 
        
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer 
}

function loseGame() {
    if (secondsLeft <= 0) {
        alert("You lost the game.") 
    }
}

function winGame() {
    var initialsPrompt = prompt("You won the game! Enter your initials to save your score.")
    if (initialsPrompt.length != 2) {
        alert("Please enter 2 characters.")
        return winGame();
      }
    console.log(initialsPrompt)
    var highScore = {
        initialsPrompt, secondsLeft
    }
    var highScoreStored = JSON.parse(localStorage.getItem("Initials-Highscore")) || [];
    console.log(highScore)
    console.log(highScoreStored)
    var newHighScore = [
        ...highScoreStored, 
        highScore
    ]
    console.log(newHighScore)
    localStorage.setItem("Initials-Highscore", JSON.stringify(newHighScore));
    console.log("high score logged")
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        } else if(answer !== quizData[currentQuiz].correct) {
            secondsLeft -= 10
        }
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = '<h2>You answered ' + score + ' / ' + quizData.length + ' questions correctly</h2><button onclick="location.reload()">Reload</button>'
            winGame();
            //form.style.display = 'block'
        }
    }
})

startBtn.addEventListener('click', function() {
    loadQuiz();
    setTime();
    quizDiv.style.display = "block";
    submitBtn.style.display = "block";
    welcomeDiv.style.display = "none";
    startBtn.style.display = "none";
})