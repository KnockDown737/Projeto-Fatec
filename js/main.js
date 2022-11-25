//Variáveis referentes aos logos/icones claros e escuros (const o valor nunca será alterado.)
const lightIcon = "imgs/light-icon.svg"
const darkIcon = "imgs/dark-icon.svg"
const logoDark = "imgs/logo-dark.svg"
const logoLight = "imgs/logo-light.svg"

//Essas variáveis foram feitas para localizar o body do HTML e o botão de alterar o tema.
const btnMode = document.getElementById("btn-dark")
const tema = document.querySelector("body")

//Essa variável é para guardar o estado do tema que foi selecionado na pag (darkmode ou lightmode), no localStorage.
let darkModesave = localStorage.getItem("dark-mode")

//Const com função vazia de ativação do darkmode.
const ativarDarkMode = () => {
    tema.classList.add("darkmode") //A const tema (o elemento body) recebe a class darkmode.
    document.getElementById("logo").src = logoDark //O elemento com id correspondente recebe um novo valor no atributo src.
    document.getElementById("btn-dark").src = darkIcon //O elemento com id correspondente recebe um novo valor no atributo src.
    localStorage.setItem("dark-mode","ativado") //Salvando no localStorage a chave dark-mode com o valor igual a ativado.
}

//Const com função vazia de desativação do darkmode. 
const desativarDarkMode = () => {
  tema.classList.remove("darkmode") //A const tema (o elemento body) perde a class darkmode.
  document.getElementById("logo").src = logoLight //O elemento com id correspondente recebe um novo valor no atributo src.
  document.getElementById("btn-dark").src = lightIcon //O elemento com id correspondente recebe um novo valor no atributo src.
  localStorage.setItem("dark-mode","desativado") //Salvando no localStorage a chave dark-mode com o valor igual a desativado.
}


// Quando a página carregar, se o darkModesave tiver o valor extamente igual a ativado, ele irá carregar o darkmode na página.
if(darkModesave === "ativado"){
  ativarDarkMode()
}

//É adicionado o evento click na const btnMode (variável referente ao botão darkmode). O mouseEvent ( (e) ) ativa uma função vazia ( => )
btnMode.addEventListener("click", (e) => {
  //Irá buscar e retornar o valor do darkModesave no localStorage e irá ativar um função dependendo do valor encontrado.
  darkModesave = localStorage.getItem("dark-mode")
  //Se o valor exatamente igual "desativado" irá ativar a função "ativarDarkMode"
  if (darkModesave === "desativado"){
    ativarDarkMode()
  }
  //Se não, irá ativar a função desativarDarkmode, nota-se que nesse caso o valor da variável darkModesave seria "ativado".
  else {
    desativarDarkMode()
  }
}
)