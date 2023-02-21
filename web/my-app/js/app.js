//pegar o tbody no html  e passar para o js
const tbody = document.querySelector('tbody')


//pegar o formulario
//escutador de eventos - submit
//criar uma função e passar o evento para dentro dessa função 
//cancelar o evento para

document.querySelector ('form').addEventListener('submit', function(e){
e.preventDefault()


//recuperar os campos colocar as informações em um array
const campos = [
    document.querySelector('#usuario'),
    document.querySelector('#email'),
    document.querySelector('#dataCadastro'),
    document.querySelector('#tipoConta')
]

//criando uma tr
const tr = document.createElement('tr')

//criar um for para percorrer o array
//ára cada indice do array uma função sera criada
//criar uma td
//colocar o value do campo no text da td (inserir no conteudo na td)
//colocar td na tr


campos.forEach(campo => {
//console.log(campo.value);
const td = document.createElement('td')
td.textContent = campo.value
tr.appendChild(td)

}) +



//vinculando a tr no tbody
tbody.appendChild(tr)

this.reset()






})
