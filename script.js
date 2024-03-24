// Initial Data
let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

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
            optionsHtml += `<div data-op="${i}" class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.option').forEach(item =>{
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
