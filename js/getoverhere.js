var $getBody    = document.querySelector('body');
var $getArticle = $getBody.querySelectorAll('article');
var $getSacola  = $getBody.querySelectorAll('.sacola');

window.addEventListener('scroll', function(){
  aparecerConteudo('.servicos','.sacola','efeito-direita');
  aparecerConteudo('.quemsomos','.sacola','efeito-esquerda');
  aparecerConteudo('.trabalheconosco','.sacola','efeito-cima');
  aparecerConteudo('.contato','.sacola','efeito-baixo');
});

function aparecerConteudo (el,alvo,efeito){
  var $getEl       = document.querySelector(el);
  var $getAlvo     = $getEl.querySelector(alvo);
  var tamanhoEl = $getEl.offsetHeight;
  var tamanhoNavegador = window.innerHeight;
  var posicaoAtual = window.pageYOffset + (tamanhoNavegador/2);
  var posicaoElTop   = $getEl.offsetTop;
  var posicaoElBot   = posicaoElTop+tamanhoEl;

  if (posicaoAtual > posicaoElTop && posicaoAtual < posicaoElBot) {
    $getAlvo.classList.remove(efeito);

  }

  else {
    $getAlvo.classList.add(efeito);
  }
}
