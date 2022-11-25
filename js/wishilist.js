function CreateRow() {
  const tabela = document.querySelector("#corpoTabela");

  const titulo = document.querySelector("#titulo");
  const preco = document.querySelector("#preco");
  const lancamento = document.querySelector("#lancamento");

  const row = tabela.insertRow(0);
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);
  const cell4 = row.insertCell(3);
  cell1.innerHTML = `<input type="text" class="titulo" readonly>`;
  cell2.innerHTML = `<input type="number" class="preco" readonly>`;
  cell3.innerHTML = `<input type="date" class="lancamento" readonly>`;
  cell4.innerHTML = `<button class="editar" onclick="editarLinha()">Editar</button> <button class="excluir">Excluir</button>`;

  cell1.querySelector('input').value = document.querySelector('#titulo').value
  cell2.querySelector('input').value = document.querySelector('#preco').value
  cell3.querySelector('input').value = document.querySelector('#lancamento').value

  const editarGame = document.querySelector(".editar")
 
  editarGame.addEventListener('click', () => {
    if (editarGame.textContent.toLowerCase() == "editar") {
      row.querySelector('.titulo').removeAttribute("readonly");
      row.querySelector('.preco').removeAttribute("readonly");
      row.querySelector('.lancamento').removeAttribute("readonly");
      row.querySelector('input').focus();
      editarGame.textContent = "salvar";
    }else{
      row.querySelector('.titulo').setAttribute("readonly", "readonly");
      row.querySelector('.preco').setAttribute("readonly", "readonly");
      row.querySelector('.lancamento').setAttribute("readonly", "readonly");
      editarGame.textContent = "editar";
    }
  })

  const excluirGame = document.querySelector(".excluir")

  excluirGame.addEventListener('click', () => {
      row.remove();
  })

  titulo.value = "";
  preco.value = "";
  lancamento.value = "";
}




