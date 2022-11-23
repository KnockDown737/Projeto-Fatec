//Pegando o formulario e a lista(ul) e colocando em const
const form = document.querySelector('#addReview')
const ul = document.querySelector('#review-content')

//Função ativada pelo event submit(enviar) do formulário, o event submit tem sua ação padrão negada(impede que o formulário redirecione para outra página)
form.onsubmit = function(event){
  event.preventDefault()

//Const's criadas para pegar o valor dos inputs do formulário e depois t
  const titulo = form.querySelector('#tGame')
  const genero = form.querySelector('#gGame')
  const descri = form.querySelector('#dGame')
  const nota = form.querySelector('#nGame')

  const value1 = titulo.value
  const value2 = genero.value
  const value3 = descri.value
  const value4 = nota.value

  if(value1 == "" || value2 == "" || value3 == "" || value4 == "" ) return


  const newLi = document.createElement('li')
  // ul.appendChild(newLi) Dessa forma o newli aparecia como Last-children
  ul.insertBefore(newLi, ul.children[0])  //Dessa forma o newli apareci como first-children

  newLi.innerHTML = `
  <div id="h2-span">
  <h2>${value1}</h2>
  <span class="sp1">${value2}</span>
  </div>
  <span class="sp2">${value4}</span>
  <button class="delete" id="del-btn">X</button>
  <p>${value3}</p>
  
  `

  titulo.value = ""
  genero.value = ""
  descri.value = ""
  nota.value = ""

}

ul.onclick = function(event){
  if(event.target.classList.contains('delete')){
    if(confirm("Irá deletar esse item. Tem certeza?")){
      event.target.parentElement.remove()
    }
  }
}


// const form = document.querySelector('#addReview')
// const ul = document.querySelector('#review-content')


// form.onsubmit = function(event){
//   event.preventDefault()


  
  

//   const titulo = form.querySelector('#tGame')
//   const genero = form.querySelector('#gGame')
//   const descri = form.querySelector('#dGame')
//   const nota = form.querySelector('#nGame')

//   const value1 = titulo.value
//   const value2 = genero.value
//   const value3 = descri.value
//   const value4 = nota.value

//   if(value1 == "" || value2 == "" || value3 == "" || value4 == "" ) return

  

//   // li.querySelector('h2').textContent = value1
//   // li.querySelector('.sp1').textContent = value2
//   // li.querySelector('p').textContent = value3
//   // li.querySelector('.sp2').textContent = value4

//   const li = ul.innerHTML += `<li>
//   <div id="h2-span">
//   <h2>${value1}</h2>
//   <span class="sp1">${value2}</span>
//   </div>
//   <span class="sp2">${value4}</span>
//   <button class="delete" id="del-btn">X</button>
//   <p>${value3}</p>
//   </li>
//   `

//   titulo.value = ""
//   genero.value = ""
//   descri.value = ""
//   nota.value = ""

//   document.parentNode.appendChild(li)

  

// }

// ul.onclick = function(event){
//   if(event.target.classList.contains('delete')){
//     if(confirm("Irá deletar esse item. Tem certeza?")){
//       event.target.parentElement.remove()
//     }
//   }
// }
