'use strict'

const openModal = () => document.getElementById('modal')
    .classList.add('active')

const closeModal = () => {
    clearFields()
    document.getElementById().classList.remove('remove')
}

const getLocalStorage = () => JSON.parse(localStorage.getItem('db_game')) ?? []
const setLocalStorage = (dbGame) => localStorage.setItem("db_game", JSON.stringify(dbGame))

//

const deleteGame = (index) => {
    const dbGame = readGame()
    dbGame.splice(index, 1)
    setLocalStorage(dbGame)
}

const updateGame = (index, game) => {
    const dbGame = readGame()
    dbGame[index] = game
    setLocalStorage(dbGame)
}

const readGame = () => getLocalStorage()

const createGame = (game) => {
    const dbGame = getLocalStorage()
    dbGame.push (game)
    setLocalStorage(dbGame)
}

const isValidFields = () => {
    return document.getElementById('form').reportValidity()
}

//

const clearFields = () => {
    const fields = document.querySelectorAll('.modal-field')
    fields.forEach(field => field.value = "")
    document.getElementById('nome').dataset.index = 'new'
}

const saveGame = () => {
    debugger
    if (isValidFields()){
        const game = {
            nome: document.getElementById('nome').value,
            preco: document.getElementById('preco').value,
            lancamento: document.getElementById('lancamento').value
        }
        const index = document.getElementById('nome').dataset.index
        if (index == 'new'){
            createGame(game)
            updateTable()
            closeModal()
        }else{
            createGame(index, game)
            updateGame()
            closeModal()
        }
    }
}

const createRow = (game, index) => {
    const newRow = document.createElement('tr')
    newRow.innerHTML = `
        <td>${game.nome}</td>
        <td>${game.preco}</td>
        <td>${game.lancamento}</td>
        <td>
            <button type="button" class="button green" id="edit-${index}">Editar</button>
            <button type="button" class="button red" id="delete-${index}" >Remover</button>
        </td>
    `
    document.querySelector('#tableGame>tbody').appendChild(newRow)
}

const clearTable = () => {
    const rows = document.querySelectorAll('#tableGame>tbody tr')
    rows.forEach(row => row.parentNode.removeChild(row))
}

const updateTable = () => {
    const dbClient  = readGame()
    clearTable()
    dbClient.forEach(createRow)
}

const fillFields = (game) => {
    document.getElementById('nome').value = game.nome
    document.getElementById('preco').value = game.preco
    document.getElementById('lancamento').value = game.lancamento
    document.getElementById('nome').dataset.index = game.index
}

const editGame = (index) => {
    const game = readGame()[index]
    game.index = index
    fillFields(game)
    openModal()
}

const editDelete = (event) => {
    if (event.target.type == 'button'){
        const [action, index] = event.target.id.split('-')
        if (action == 'edit'){
            editGame(index)
        }else{
            const game = readGame()[index]
            const response = confirm(`Deseja realmente remover o jogo ${game.nome} ?`)
            if (response){
                deleteGame(index)
                updateTable()
            }
        }
    }
}

updateTable() //???

//

document.getElementById('cadastrarGame')
    .addEventListener('click', openModal)

document.getElementById('modalClose')
    .addEventListener('click', closeModal)

document.getElementById('Salvar')
    .addEventListener('click', saveGame)

document.getElementById('#tableGame>tbody')
    .addEventListener('click', editDelete)

document.getElementById('cancelar')
    .addEventListener('click', closeModal)