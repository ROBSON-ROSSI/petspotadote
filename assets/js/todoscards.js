// var slides = document.getElementById('slide-index');
// var body = document.querySelector('body');
var galeria = document.querySelector('.galeria-adoçao');

// Gera os cards da galeria de animais
function GeraCards() {
  var cards = [];
  for (let index = 0; index < 12; index++) {
    // CODIGO HTML DA ESTRUTURA DOS CARDS
    cards += `<div class="div-card-doacao" id="card${index}">
      <div class="div-img-card">
          <img src="imagens/icones/camera.svg" alt="">
      </div>
      <div class="div-dados-animal">
          <p>Nome</p>
          <p>Idade</p>
      </div>
      <div class="div-botao">
          <span>Dias esperando um lar: **</span>
          <a href="#" class="btn-card">Botão</a>
      </div>
  </div>`
  }
  // Inseri os cards na galeria
  galeria.innerHTML = cards;
  
  // Captura o click do botão e gera um id para cada botão
  var btn_card = document.querySelectorAll('.btn-card');
  var cards_adocao = document.querySelectorAll('.div-card-doacao');
  for (let index = 0; index < btn_card.length; index++) {
    btn_card[index].addEventListener('click', (e) => {
        e.preventDefault();
        btn_card[index].setAttribute('id',index);
        alert(cards_adocao[index].id);
        
      })
    
    
  }
 
}
// CARREGA OS CARD QUANDO A PAGINA ESTA ABRINDO VIA JAVA SCRIPT
// window.addEventListener('load', () => {
//   GeraCards();
  
// });

