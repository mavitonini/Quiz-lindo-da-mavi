const perguntas = [
  {
    pergunta: "Qual é o animal mais fofo?",
    respostas: [
      { texto: "Gatinho 🐾", correta: false },
      { texto: "Pandinha 🐼", correta: false },
      { texto: "Coelhinho 🐰", correta: false },
      { texto: "Todos eles! ✨", correta: true }
    ]
  },
  {
    pergunta: "Qual é a melhor cor do mundo?",
    respostas: [
      { texto: "Rosa Pastel 🌸", correta: true },
      { texto: "Azul Bebê 🩵", correta: false },
      { texto: "Roxo Cheiroso 🪻", correta: false },
      { texto: "Amarelo Sol 💛", correta: false }
    ]
  }
];

let indiceAtual = 0;
let pontuacao = 0;

const elPergunta = document.getElementById("pergunta");
const elOpcoes = document.getElementById("opcoes");
const elQuizContainer = document.getElementById("quiz-container");
const elResultadoContainer = document.getElementById("resultado-container");
const elResultadoTexto = document.getElementById("resultado-texto");

function carregarPergunta() {
  limparEstado();
  const perguntaAtual = perguntas[indiceAtual];
  elPergunta.innerText = perguntaAtual.pergunta;

  perguntaAtual.respostas.forEach(resposta => {
    const botao = document.createElement("button");
    botao.innerText = resposta.texto;
    botao.classList.add("btn-opcao");
    botao.addEventListener("click", () => selecionarResposta(resposta.correta));
    elOpcoes.appendChild(botao);
  });
}

function limparEstado() {
  elOpcoes.innerHTML = "";
}

function selecionarResposta(correta) {
  if (correta) {
    pontuacao++;
  }
  indiceAtual++;
  if (indiceAtual < perguntas.length) {
    carregarPergunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  elQuizContainer.classList.add("escondido");
  elResultadoContainer.classList.remove("escondido");
  elResultadoTexto.innerText = `Você acertou ${pontuacao} de ${perguntas.length} perguntas! 🎀`;
}

function reiniciarQuiz() {
  indiceAtual = 0;
  pontuacao = 0;
  elResultadoContainer.classList.add("escondido");
  elQuizContainer.classList.remove("escondido");
  carregarPergunta();
}

carregarPergunta();