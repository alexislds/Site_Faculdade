var $getBody = document.querySelector('body');
var $getHome = $getBody.querySelector('.home');
var $getServicos = $getBody.querySelector('.servicos');
var $getQuemSomos = $getBody.querySelector('.quemsomos');
var $getTrabalheConosco = $getBody.querySelector('.trabalheconosco');
var $getContato = $getBody.querySelector('.contato');
var $getBotoes = $getBody.querySelectorAll('.btn-efeito');
var $getBotao = $getBody.querySelector('.btn-efeito');

$getBotao.addEventListener('click', function(){
  rolar('.btn-efeito', '.contato', 10000);
});

function rolar(trigger, el, speed) {
  var $getEl = document.querySelector(el);
  console.log($getEl);
  var $getTrigger = document.querySelector(trigger);
  console.log($getTrigger);
  var posicaoEl = $getEl.offsetTop;
  console.log(posicaoEl);
  
  window.scrollTo(0, posicaoEl);
}
