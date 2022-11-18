const form = document.querySelector('#addReview')
const ul = document.querySelector('#review-content')


form.onsubmit = function(event){
  event.preventDefault()


  
  

  const titulo = form.querySelector('#tGame')
  const genero = form.querySelector('#gGame')
  const descri = form.querySelector('#dGame')
  const nota = form.querySelector('#nGame')

  const value1 = titulo.value
  const value2 = genero.value
  const value3 = descri.value
  const value4 = nota.value

  if(value1 == "" || value2 == "" || value3 == "" || value4 == "" ) return

  

  // li.querySelector('h2').textContent = value1
  // li.querySelector('.sp1').textContent = value2
  // li.querySelector('p').textContent = value3
  // li.querySelector('.sp2').textContent = value4

  const li = ul.innerHTML += `<li>
  <h2>${value1}</h2>
  <span class="sp1">${value2}</span>
  <span class="sp2">${value4}</span>
  <p>${value3}</p>
  <button class="delete">X</button>
  </li>
  `

  titulo.value = ""
  genero.value = ""
  descri.value = ""
  nota.value = ""

  document.parentNode.appendChild(li)

  

}

ul.onclick = function(event){
  if(event.target.classList.contains('delete')){
    if(confirm("Irá deletar esse item. Tem certeza?")){
      event.target.parentElement.remove()
    }
  }
}