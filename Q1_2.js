// Reference: https://codingwithnick.in/create-a-quiz-app-using-html-css-javascript/ //
// Quiz data containing quiz questions and answers
const quizData = [
    {
        question: "Which fintech innovation allows individuals to directly lend and borrow money without relying on traditional financial intermediaries?",
        a: "Peer-to-peer lending",
        b: "Mobile banking",
        c: "Contactless payments",
        d: "Cryptocurrency mining",
        correct: "a",
    },
    {
        question: "What technology forms the foundation of most cryptocurrencies and facilitates secure, decentralized transactions?",
        a: "Blockchain",
        b: "Artificial intelligence",
        c: "Quantum computing",
        d: "Internet of Things (IoT)",
        correct: "a",
    },
    {
        question: 'Who authored the original whitepaper titled "Bitcoin: A Peer-to-Peer Electronic Cash System" in 2008?',
        a: "Vitalik Buterin",
        b: "Satoshi Nakamoto",
        c: "Charlie Lee",
        d: "Gavin Andresen",
        correct: "b",
    },
    {
        question: 'What regulatory framework aims to prevent money laundering and terrorist financing in the financial industry?',
        a: "PCI DSS (Payment Card Industry Data Security Standard)",
        b: "GDPR (General Data Protection Regulation)",
        c: "PSD2 (Revised Payment Services Directive)",
        d: "AML (Anti-Money Laundering)",
        correct: "d",
    },
    {
        question: "Which of the following is NOT a typical application of blockchain technology in fintech?",
        a: "Cross-border payments",
        b: "Identity verification",
        c: "Customer relationship management",
        d: "Smart contracts",
        correct: "c",
    },
    {
        question: "What is the primary goal of open banking initiatives in the fintech industry?",
        a: "To restrict access to financial data",
        b: "To promote innovation and collaboration by enabling third-party access to banking data",
        c: "To limit competition among financial institutions",
        d: "To centralise control over financial data within a single institution for enhanced security",
        correct: "b",
    },
    {
        question: "What mechanism do Bitcoin miners employ to compete in solving intricate mathematical puzzles, aiming to validate transactions and append them to the blockchain?",
        a: "Byzantine Fault Tolerance (BFT)",
        b: "Delegated Proof of Stake (DPoS)",
        c: "Proof of Work (PoW)",
        d: "Proof of Stake (PoS)",
        correct: "c",
    },
    {        
        question: 'In the context of fintech, what does the acronym "KYC" stand for?',
        a: "Know Your Customer",
        b: "Know Your Currency",
        c: "Know Your Credit",
        d: "Know Your Cash",
        correct: "a",
    },


];

// DOM elements
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

// Track quiz progress and score
let currentQuiz = 0
let score = 0

let questionarray = []
let arraynumber = 0

// Load a quiz question
function loadQuiz() {
    // Clear previously selected answers
    deselectAnswers()

    // Get data for the current quiz question
    const currentQuizData = quizData[currentQuiz]

    // Update DOM with current question and answers
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// Clear all answer options
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

// Get the selected answer
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

while(questionarray.length < quizData.length){
	   const randomIndex = Math.floor(Math.random() * quizData.length);
	   
	   if(questionarray.includes(randomIndex) == false){
		   questionarray.push(randomIndex)
	   } 
}

currentQuiz = questionarray[arraynumber]
loadQuiz()
	   
// Event listener to detect when a submit button is clicked
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       // Check if selected answer is correct
       if(answer === quizData[currentQuiz].correct) {
           score++ // Increment score if correct
       }
	   
       // Load next question until 5 question is done
       if(++arraynumber < 5) {
		   currentQuiz = questionarray[arraynumber]
           loadQuiz()
       } else {
            // Show score along with the option to restart the quiz
            quiz.innerHTML = `
           <h2>You answered ${score}/5 questions correctly</h2>

           <button onclick="location.reload()">Restart</button>
           `
       }
    }
})