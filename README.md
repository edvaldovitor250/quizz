<body>
  <header>
    <h1>Quiz em JavaScript</h1>
  </header>
  <main>
    <h2>Índice</h2>
    <ol>
      <li><a href="#visão-geral">Visão Geral ℹ️</a></li>
      <li><a href="#tela-do-dashboard">Tela Inicial 🎮</a></li>
      <li><a href="#business-rules">Funcionalidades ⚙️</a></li>
      <li><a href="#logic-js">Lógica do JavaScript🧠<a/></li>
      <li><a href="#funcionamento-dos-filtros">Instruções de Uso 🛠️</a></li>
      <li><a href="#instruções-de-inicialização-do-projeto">Instruções de Inicialização do Projeto 🚀</a></li>
      <li><a href="#tecnologias-utilizadas">Tecnologias Utilizadas 💻</a></li>
    </ol>
  <section id="visão-geral">
    <h2>Visão Geral</h2>
    <p>Esta aplicação permite jogar um quiz usando JavaScript. Contém 10 questões relacionadas à programação.</p>
</section>

<section id="tela-do-dashboard">
    <h2>Tela Inicial</h2>
    <img src="https://github.com/edvaldovitor250/quizz/assets/116117189/d83a390e-4053-4224-943e-a4ee86bcac96" alt="Screenshot 1">
</section>

<section id="business-rules">
    <h2>Funcionalidades</h2>
    <ul>
        <li>Permite ao usuário escolher as questões 🔍</li>
        <li>Realiza verificação automática das questões ✔️</li>
        <li>Oferece a funcionalidade de reinicialização do quiz ♻️</li>
    </ul>
</section>
    <section id="logic-js">
      <h2>Lógica no JavaScript</h2>
      <p>Essa foi a lógica implementada para esse projeto</p>
        
        // Initial Data
    let currentQuestion = 0;
    let correctAnswer = 0;
    let userAnswers = []; 
    
    
    showQuestion();
    
    // Events
    document.querySelector('.resetAll').addEventListener('click', resetEvent)
    document.querySelector('.results').addEventListener('click', seePoints)
    
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
    
    function showResults() {
        let resultHTML = '<h2>Resultados:</h2>';
    
    for (let i = 0; i < questions.length; i++) {
        let q = questions[i];
        let userAnswerIndex = userAnswers[i];
        let correctAnswerIndex = q.answer;
        
        let result = userAnswerIndex === correctAnswerIndex ? 'Correto' : 'Incorreto';
        
        resultHTML += `<p>Pergunta ${i + 1}: ${q.question}<br>
                       Sua resposta: ${q.options[userAnswerIndex]}<br>
                       Resposta correta: ${q.options[correctAnswerIndex]}<br>
                       Resultado: ${result}</p>`;
    }
    
    document.querySelector('.results').innerHTML = resultHTML;
    }
    
    function seePoints() {
        showResults();
        document.querySelector('.results').style.display = 'block';
    }
              



      
  </section>
    <section id="funcionamento-dos-filtros">
    <h2>Instruções de Uso</h2>
    <p>Para utilizar a aplicação, é necessário baixar os arquivos do projeto ou clonar o repositório. Em seguida, abra o arquivo <code>index.html</code> em um navegador web compatível. Use esse código abaixo no VsCode</p>
    <pre><code>git clone https://github.com/edvaldovitor250/quizz.git</code></pre>
    <p>Além disso, é possível contribuir com o projeto propondo melhorias, correções de bugs ou adição de novos recursos. Para isso, basta seguir as instruções disponíveis no repositório. ✍️</p>
</section>
    <section id="instruções-de-inicialização-do-projeto">
      <h2>Instruções de Inicialização do Projeto</h2>
      <ol>
        <li>Abra o arquivo <code>index.html</code> no seu navegador web preferido. 🌐
          <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/8b9fb383-d9e5-44b8-9e54-dff95d16fb44" alt="Visual Studio Code - index.html">
        </li>
        <li>Recomenda-se a utilização da extensão Live Server no Visual Studio Code. 🚀
          <img src="https://github.com/edvaldovitor250/dashbord/assets/116117189/88c85725-2358-4f13-b6ed-1e9270f87beb" alt="Extensão Live Server">
        </li>
        <li>Após configurar a extensão, basta clicar no botão "Go Live" para iniciar o servidor local e visualizar o projeto. 🚀
          <img src="https://github.com/edvaldovitor250/jogo-da-velha/assets/116117189/abf9458d-1816-43d1-abe0-8693d8d0a462" alt="parte3">
        </li>
      </ol>
    </section>
    <section id="tecnologias-utilizadas">
      <h2>Tecnologias Utilizadas</h2>
      <table>
        <thead>
          <tr>
            <th><img src="https://skillicons.dev/icons?i=html" alt="HTML5"> HTML</th>
            <th><img src="https://skillicons.dev/icons?i=css" alt="CSS"> CSS</th>
            <th><img src="https://skillicons.dev/icons?i=js" alt="JavaScript"> JavaScript</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>🔖 5</td>
            <td>🔖 3</td>
            <td>🔖 ES6</td>
          </tr>
        </tbody>
      </table>
    </section>
    <footer>
      <p>Autor: Este projeto foi desenvolvido por Edvaldo Vitor. 👨‍💻</p>
      <p>Licença: Este projeto está licenciado sob a MIT License. ⚖️</p>
    </footer>
  </main>
</body>
