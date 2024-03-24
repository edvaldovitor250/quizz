// Initial Data
let currentQuestion = 0;

showQuestion();

// Function
function showQuestion() {
    if (questions[currentQuestion]) {
        let q = questions[currentQuestion];

        // Oculta a área de pontuação e exibe a área de pergunta
        document.querySelector('.scoreArea').style.display = 'none';
        document.querySelector('.questionArea').style.display = 'block';

        // Define o conteúdo da pergunta
        document.querySelector('.question').innerHTML = q.question;
        document.querySelector('.options').innerHTML = '';

        // Gera o HTML para as opções
        let optionsHtml = '';
        for (let i in q.options) {
            optionsHtml += `<div data-op${i} class="option"><span>${parseInt(i)+1}</span>${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.option .option').forEach(item =>{
            item.addEventListener('click',optionClickEvent)
        })
        

    } else {
        // Não há mais perguntas
    }
}
