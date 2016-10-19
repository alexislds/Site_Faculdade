var $getBody    = document.querySelector('body');
var $getArticle = $getBody.querySelectorAll('article');
var $getSacola  = $getBody.querySelectorAll('.sacola');

window.addEventListener('scroll', function(){
  aparecerConteudo('.servicos','.sacola');
});

function aparecerConteudo (el,alvo){
  var $getEl       = document.querySelector(el);
  var $getAlvo     = $getEl.querySelector(alvo);
  var tamanhoEl = $getEl.offsetHeight;
  var tamanhoNavegador = window.innerHeight;
  var posicaoAtual = window.pageYOffset + (tamanhoNavegador/2);
  var posicaoElTop   = $getEl.offsetTop;
  var posicaoElBot   = posicaoElTop+tamanhoEl;

  if (posicaoAtual > posicaoElTop && posicaoAtual < posicaoElBot) {
    $getAlvo.classList.remove('efeito-esquerda');

  }

  else {
    $getAlvo.classList.add('efeito-esquerda');
  }
}
