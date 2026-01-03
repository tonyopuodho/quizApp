const containerElement = document.getElementById("container")
const startButton = document.getElementById("start_button")
const questionElement = document.getElementById("question_container")
const question = document.getElementById("question")
const questionNumber = document.getElementById("question_number")
const totalQuestions = document.getElementById("total_questions")
const scoreElement = document.getElementById("score")
const questionContainer = document.getElementById("questions")
const resultContainer = document.getElementById("results_container")
const totalScore = document.getElementById("total_score")
const finalScore = document.getElementById("final_score")
const restartButton = document.getElementById("restart")
const answerElement = document.getElementById("answer_element")

let questionIndex = 0
let score = 0
let answerdisabled = false

const questions = [
    {
        question: "Which data structure uses the First-In-First-Out (FIFO) principle?",
        answers:[
            {text:"Stack", correct: false},
            {text:"Tree", correct: false},
            {text:"Queue", correct: true},
            {text:"Graph", correct: false}
        ]
    },
     {
        question: "What is the capital city of Australia?",
        answers:[
            {text:"Sydney", correct: false},
            {text:"Melbourne", correct: false},
            {text:"Canberra", correct: true},
            {text:"Brisbane", correct: false}
        ]
    },
    {
        question: "Which programming language is primarily used for statistical computing and data analysis?",
        answers:[
            {text:"Java", correct: false},
            {text:"C++", correct: false},
            {text:"Python", correct: false},
            {text:"R", correct: true}
        ]
    },
      {
        question: "In computer networks, what does HTTP stand for?",
        answers:[
            {text:"Hyperlink Transfer Protocol", correct: false},
            {text:"HyperText Transfer Protocol", correct: true},
            {text:"High Transfer Text Protocol", correct: false},
            {text:"Hyper Tool Transfer Process", correct: false}
        ]
    },
     {
        question: "Which of the following is a renewable source of energy?",
        answers:[
            {text:"Coal", correct: false},
            {text:"Natural gas", correct: false},
            {text:"Solar energy", correct: true},
            {text:"Petroleun", correct: false}
        ]
     },
      {
        question: "What is the main function of the CPU in a computer?",
        answers:[
            {text:"Store data", correct: false},
            {text:"Display graphics", correct: false},
            {text:"Execute instructions", correct: true},
            {text:"Manage network connections", correct: false}
        ]
     },
      {
        question: "Which mathematical symbol represents logical AND?",
        answers:[
            {text:"∨", correct: false},
            {text:"¬", correct: false},
            {text:"⊕", correct: false},
            {text:"∧", correct: true}
        ]
     },
      {
        question: "Which machine learning type uses labeled data?",
        answers:[
            {text:"Unsupervised learning", correct: false},
            {text:"Supervised learning", correct: true},
            {text:"Rainforcement learnig", correct: false},
            {text:"Semi-supervised learning", correct: false}
        ]
     },
       {
        question: "What does SQL stand for?",
        answers:[
            {text:"Structured Query Language", correct: true},
            {text:"Simple Query Language", correct: false},
            {text:"Sequential Query Logic", correct: false},
            {text:"Standard Question Language", correct: false}
        ]
     },
       {
        question: "Which device is used to convert digital signals to analog signals?",
        answers:[
            {text:"Router", correct: false},
            {text:"Switch", correct: false},
            {text:"Modem", correct: true},
            {text:"Hub", correct: false}
        ]
     }
]

totalQuestions.textContent = questions.length
finalScore.textContent =questions.length

let startQuiz = () => {
    questionElement.classList.add("active")
    containerElement.classList.add("active")
    showQuestions()
}

let showQuestions = () => {
    answerdisabled = false
    const currentQuestion = questions[questionIndex]
    questionNumber.textContent = questionIndex + 1
    question.textContent = currentQuestion.question
    answerElement.innerHTML = ""
    currentQuestion.answers.forEach((answers) => {
        const button = document.createElement("button")
        button.textContent = answers.text
        button.classList.add("btn_class")
        button.dataset.correct = answers.correct
        button.addEventListener('click',selectAnswer)
        answerElement.appendChild(button)
        
    })
}  

let selectAnswer = (event) => {
    if (answerdisabled) return;
    const selectedButton = event.target
    const isCorrect = selectedButton.dataset.correct === "true"
    Array.from(answerElement.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        } else if (button === selectedButton) {
            button.classList.add("incorrect")
        }
    })

    if (isCorrect) {
        score++;
        scoreElement.textContent = score        
    }

    setTimeout(() => {
        questionIndex += 1
        if (questionIndex < questions.length){
            showQuestions()
        } else {
            showResults()
        }
    },1000)
}

let showResults = () => {
    questionElement.classList.remove('active')
    resultContainer.classList.add('active')
    totalScore.textContent = score
}
let restartQuiz = () => {
    score = 0
    questionIndex = 0
    totalScore.textContent = score
    resultContainer.classList.remove('active')
    containerElement.classList.remove('active')
    
}

restartButton.addEventListener('click',restartQuiz)
startButton.addEventListener('click',startQuiz)