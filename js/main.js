

var imgAtual ="imgs/logo.svg"   /*logo normal*/
var imgAnterior="imgs/logoTeste.png" /*logo em branco*/


function darkMode() {
  var element = document.body;
  element.classList.toggle("darkmode");  
  /*troca de cores do logo*/
  document.getElementById("logo").src= imgAtual; /*Ele acessa o atributo src do id=logo e troca de imagem*/
  let aux = imgAtual;
  imgAtual = imgAnterior;  /* A imagem atual vira a imagem anterior */
  imgAnterior = aux;


      }
