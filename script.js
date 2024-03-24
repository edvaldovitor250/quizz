// Initial Data
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

// Events
document.querySelector('.scoreArea button').addEventListener('click', resetEvent)

// Function
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion + 1) / questions.length * 100);

        document.querySelector('.progress--bar').style.width = `${pct}%`;

        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        });

    } else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickedOptionIndex = parseInt(e.target.getAttribute('data-op'));

    let correctAnswerIndex = questions[currentQuestion].answer;

    if (clickedOptionIndex === correctAnswerIndex) {
        correctAnswer++;

    }
    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100)

    if (points < 30) {
        document.querySelector('.scoreText1').innerHTML = `Tá ruim em!!`
        document.querySelector('.scorePct').style.color = '#FF0000'
    } else if (points >= 30 && points < 70) {
        document.querySelector('.scoreText1').innerHTML = `Muito bom!`
        document.querySelector('.scorePct').style.color = '#FFFF00'
    } else if (points >= 70) {
        document.querySelector('.scoreText1').innerHTML = `Parabéns, Você foi ótimo`
        document.querySelector('.scorePct').style.color = '#0D630D'
    }

    document.querySelector('.scorePct').innerHTML = `Acertou ${points}%`
    document.querySelector('.scoreText2').innerHTML = `Você respondeu ${questions.length} questões e acertou ${correctAnswer}`

    document.querySelector('.scoreArea').style.display = 'block';
    document.querySelector('.questionArea').style.display = 'none';
    document.querySelector('.progress--bar').style.width = `100%`;

}

function resetEvent() {
    correctAnswer = 0
    currentQuestion = 0
    showQuestion()
}