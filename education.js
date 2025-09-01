// Quiz Data
const quizData = [
    {
        question: "In which year did the Bangladesh Liberation War occur?",
        options: ["1947", "1971", "1969", "1952"],
        answer: "1971"
    },
    {
        question: "What was the main cause of the Language Movement?",
        options: ["Economic inequality", "Language recognition", "Political independence", "Cultural festival"],
        answer: "Language recognition"
    },
    {
        question: "Who led the Bangladesh Liberation War?",
        options: ["Sheikh Mujibur Rahman", "Muhammad Ali Jinnah", "Indira Gandhi", "Ziaur Rahman"],
        answer: "Sheikh Mujibur Rahman"
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionEl.innerText = currentQuiz.question;
    optionsEl.innerHTML = "";
    currentQuiz.options.forEach(option => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option);
        optionsEl.appendChild(btn);
    });
}

function checkAnswer(selected) {
    if(selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        questionEl.innerText = "Quiz Completed!";
        optionsEl.innerHTML = "";
        scoreEl.innerText = `Your score: ${score} / ${quizData.length}`;
        nextBtn.style.display = "none";
    }
}

nextBtn.addEventListener("click", loadQuestion);

// Load first question
loadQuestion();

// Timeline Interaction
const events = document.querySelectorAll(".timeline-event");
const eventDetail = document.getElementById("event-detail");

const eventInfo = {
    "1952": "Language Movement demanding recognition of Bangla as a state language.",
    "1969": "Mass uprising against Pakistani regime.",
    "1971": "Bangladesh Liberation War leading to independence."
};

events.forEach(event => {
    event.addEventListener("click", () => {
        const year = event.dataset.year;
        eventDetail.innerText = `${year}: ${eventInfo[year]}`;
    });
});
