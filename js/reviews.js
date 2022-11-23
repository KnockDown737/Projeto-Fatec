//Pegando o formulario e a lista(ul) e colocando em const
const form = document.querySelector('#addReview')
const ul = document.querySelector('#review-content')

//Função ativada pelo event submit(enviar) do formulário, o event submit tem sua ação padrão negada(impede que o formulário redirecione para outra página)
form.onsubmit = function(event){
  event.preventDefault()

//Const's criadas para pegaros inputs do formulário e depois transferir o valor para um const para se utilizado
  const titulo = form.querySelector('#tGame')
  const genero = form.querySelector('#gGame')
  const descri = form.querySelector('#dGame')
  const nota = form.querySelector('#nGame')

  const value1 = titulo.value
  const value2 = genero.value
  const value3 = descri.value
  const value4 = nota.value

//Se os values(1,2,3,4) estiverem vazios (sem valor) a função ira return (assim só poderá ser "ativada" se todos os inputs do form estiverem preenchidos)
  if(value1 == "" || value2 == "" || value3 == "" || value4 == "" ) return

//Crio uma tag li dentro do ul(lista)
  const newLi = document.createElement('li')

  // ul.appendChild(newLi) Dessa forma o newli aparecia como Last-children
  ul.insertBefore(newLi, ul.children[0])  //Dessa forma o newli apareci como first-children

//Insiro o modelo de HTML com os value's posicionados em suas respectivas tag's no li recém-criado
  newLi.innerHTML = `
  <div id="h2-span">
  <h2>${value1}</h2>
  <span class="sp1">${value2}</span>
  </div>
  <span class="sp2">${value4}</span>
  <button class="delete" id="del-btn">X</button>
  <p>${value3}</p>
  
  `

//Limpo o valor(value) dos input's (assim deixo o formulário vazio de novo)
  titulo.value = ""
  genero.value = ""
  descri.value = ""
  nota.value = ""

}


//Botão usado para remover o item(li)
//Função ativa pelo event click (envento de clicar no no item destinado)
ul.onclick = function(event){
  //Se o "alvo" do event click conter a class especifica(delete nesse caso)
  if(event.target.classList.contains('delete')){
    //Irá aparecer um "alert/pop-up" de confirmação, se Sim segue, se Não cancela
    if(confirm("Irá deletar esse item. Tem certeza?")){
      //Removerá o elemento "pai"(parentElement) do "alvo" do evento. Nesse caso como o alvo é uma tag button dentro da tag li, o li é considerado seu pai e então removido
      event.target.parentElement.remove()
    }
  }
}

