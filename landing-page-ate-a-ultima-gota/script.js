const slides = document.querySelectorAll(".carrossel-slide");
const btnAnterior = document.getElementById("btn-anterior");
const btnProximo = document.getElementById("btn-proximo");

let slideAtual = 0;
let tempoRotacao;

function mostrarSlide(indice) {
  slides.forEach((slide) => slide.classList.remove("active"));

  if (indice >= slides.length) {
    slideAtual = 0;
  } else if (indice < 0) {
    slideAtual = slides.length - 1;
  } else {
    slideAtual = indice;
  }

  slides[slideAtual].classList.add("active");
}

function iniciarAutoplay() {
  tempoRotacao = setInterval(() => {
    mostrarSlide(slideAtual + 1);
  }, 3500);
}

function reiniciarAutoplay() {
  clearInterval(tempoRotacao);
  iniciarAutoplay();
}

btnProximo.addEventListener("click", () => {
  mostrarSlide(slideAtual + 1);
  reiniciarAutoplay();
});

btnAnterior.addEventListener("click", () => {
  mostrarSlide(slideAtual - 1);
  reiniciarAutoplay();
});

iniciarAutoplay();

const formVip = document.getElementById("form-vip");
const campoNome = document.getElementById("nome");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

formVip.addEventListener("submit", function (event) {
  event.preventDefault(); // Impede o recarregamento da página

  const nome = campoNome.value;

  mensagemConfirmacao.textContent = `Obrigado, ${nome}! Seu acesso VIP foi confirmado.`;

  formVip.reset();
});
