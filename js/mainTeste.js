// JS inicial, antigo

// function darkMode() {
//   var element = document.body;
//   element.classList.toggle("darkmode");
// }

//Variaveis referente aos logos e icones
const nightIcon = "imgs/dark.svg" //botão em branco
const lightIcon = "imgs/light.svg" //botão padrão
const logoL = "imgs/logo.svg" //logo padrão
const logoD = "imgs/darklogo.svg" //logo em branco

//Criei variaveis para localizar os elementos no html (botão, body)
const toggleBtn = document.getElementById("btn-dark");
const theme = document.querySelector('body');
//Variavel para armazar o estado do tema (darkmode ou não) no localStorage
let darkMode = localStorage.getItem("dark-mode");

//Const com função de "ativação" do darkmode
const enableDarkMode = () => {
  //const theme(o elemento body) recebe(add) a class darkmode(nome dado a classe)
  theme.classList.add("darkmode");

  document.getElementById("logo").src = logoD;
  //Linhas de comando desnecessarios nesse modo
  // let auxLogo = logoL;
  // logoL = logoD;
  // logoD = auxLogo;

  document.getElementById("btn-dark").src = nightIcon;
  //Linhas de comando desnecessarios nesse modo
  // let auxIcon = lightIcon;
  // lightIcon = nightIcon;
  // nightIcon = auxIcon;



  //const toggleBtn(elemento button) perde a class dark-mode-toggle(? Verificar se necessário) APARENTEMENTE NÃO É!!!
  // toggleBtn.classList.remove("dark-mode-toggle");

  //localStorage recebe o item(key, value) e seu valor, key:dark-mode, value:enabled
  localStorage.setItem("dark-mode", "enabled");
};

// Const com a função de desligamento do darkmode
const disableDarkMode = () => {
  //const theme(o elemento body) perde(remove) a class darkmode(nome dado a classe)
  theme.classList.remove("darkmode");

  document.getElementById("logo").src = logoL;
  //Linhas de comando desnecessarios nesse modo
  // let auxLogo = logoL;
  // logoL = logoD;
  // logoD = auxLogo;

  document.getElementById("btn-dark").src = lightIcon;



  //const toggleBtn(elemento button) recebe a class dark-mode-toggle(? Verificar se necessário) APARENTEMENTE NÃO É!!!
  // toggleBtn.classList.add("dark-mode-toggle");

  //localStorage recebe o item(key, value) e seu valor, key:dark-mode, value:disable
  localStorage.setItem("dark-mode", "disabled");
};

// VERIFICAR CÓDIGO

// Verifica se a variavel darkmode (variavel referente ao localStorage) possui o valor enable, se Sim ele ativa a função enableDarkmode
//Isso seria para utilizar a escolhe do tema pelo usuario ate que ele mude
if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
}

// VERIFICAR CÓDIGO
//É adicionado o evento 'click' na const toggleBtn(variavel referente ao botão do darkmode)
//O mouseEvent ( (e) ) ativa um função vazia ( => ) 
toggleBtn.addEventListener("click", (e) => {
  //Irá buscar e retornar o valor do darkmode no localStorage e ira ativa uma função dependendo do valor encontrado
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  //Se o valor for exatamente (===) 'disabled', ira ativar a função enableDArkMode
  if (darkMode === "disabled") {
    enableDarkMode();
    //se Não ira ativar a função disableDarkMode, notasse que nesse caso o valor da variavel darkmode teria sido 'enable'
  } else {
    disableDarkMode();
  }
});