var $getBody = document.querySelector('body');
var $getHome = $getBody.querySelector('.home');
var $getServicos = $getBody.querySelector('.servicos');
var $getQuemSomos = $getBody.querySelector('.quemsomos');
var $getTrabalheConosco = $getBody.querySelector('.trabalheconosco');
var $getContato = $getBody.querySelector('.contato');
var $getBotoes = $getBody.querySelectorAll('.btn-efeito');
var $getBotao = $getBody.querySelector('.btn-efeito');

$getBotoes[0].addEventListener('click', function(){
  rolar('.servicos', 5);
});
$getBotoes[1].addEventListener('click', function(){
  rolar('.home', 5);
});
$getBotoes[2].addEventListener('click', function(){
  rolar('.quemsomos', 5);
});
$getBotoes[3].addEventListener('click', function(){
  rolar('.servicos', 5);
});
$getBotoes[4].addEventListener('click', function(){
  rolar('.contato', 5);
});
$getBotoes[5].addEventListener('click', function(){
  rolar('.contato', 5);
});
$getBotoes[6].addEventListener('click', function(){
  rolar('.contato', 5);
});
$getBotoes[7].addEventListener('click', function(){
  rolar('.contato', 5);
});

function rolar(el, speed) {
  var $getEl = document.querySelector(el);
  console.log($getEl);
  var bodyHeight = document.body.offsetHeight*4;
  console.log(bodyHeight);
  var posicaoEl = $getEl.offsetTop;
  console.log(posicaoEl);
  var posicaoAtual = window.pageYOffset;
  console.log(posicaoAtual);
  var distancia = 1;

  var rolar = setInterval(function(){
    if (posicaoAtual >= bodyHeight) {
      clearInterval(rolar);
      console.log("parou");
    }
    else if (posicaoAtual < posicaoEl) {
      var andar = posicaoAtual + distancia;
      scrollTo(0, andar);
      posicaoAtual = window.pageYOffset;
      console.log(posicaoAtual);
    }
    else if (posicaoAtual > posicaoEl) {
      andar = posicaoAtual - distancia;
      scrollTo(0, andar);
      posicaoAtual = window.pageYOffset;
      console.log(posicaoAtual);
    }
    else if (posicaoAtual == posicaoEl) {
      clearInterval(rolar);
      console.log("parou");
    }
  }, speed);

}
