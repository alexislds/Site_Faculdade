var $getBody = document.querySelector('body');
var $getBotoes = $getBody.querySelectorAll('.btn-efeito');

$getBotoes[0].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.servicos', 100);
});
$getBotoes[1].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.home', 5);
});
$getBotoes[2].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.quemsomos', 5);
});
$getBotoes[3].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.servicos', 5);
});
$getBotoes[4].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.trabalheconosco', 5);
});
$getBotoes[5].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.quemsomos', 5);
});
$getBotoes[6].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.contato', 5);
});
$getBotoes[7].addEventListener('click', function(el){
  el.preventDefault();
  rolar('.trabalheconosco', 5);
});

function rolar(el, duracao, velocidade) {
  var velocidade = velocidade || 15;
  
  var $getEl       = document.querySelector(el);
  var posicaoEl    = parseInt($getEl.offsetTop);
  var posicaoAtual = parseInt(window.pageYOffset);
  var distancia;
  var andar;
    
  var rolar = setInterval(function(){
    var distancia = posicaoEl - posicaoAtual;
    var andarDown = posicaoAtual + velocidade;
    var andarUp = posicaoAtual - velocidade;
    
    if (posicaoAtual < posicaoEl) {
      
      if (distancia >= velocidade) {
        scrollTo(0, andarDown);
        
        posicaoAtual = parseInt(window.pageYOffset);
      }
      else {
        scrollTo(0, posicaoEl);
        
        posicaoAtual = parseInt(window.pageYOffset);
        
        clearInterval(rolar);
      }
    }
    else if (posicaoAtual > posicaoEl) {
      
      if (distancia <= velocidade) {
        scrollTo(0, andarUp);
        posicaoAtual = parseInt(window.pageYOffset);
      }
      else {
        velocidade = 1;
        andarUp = posicaoAtual - velocidade;
        scrollTo(0, andarUp);
        posicaoAtual = parseInt(window.pageYOffset);
      }
    }
    else if (posicaoAtual == posicaoEl) {
      clearInterval(rolar);
    }
  }, duracao);
}
