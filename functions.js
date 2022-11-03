var cep = document.getElementById("cep")
var bntSearch = document.getElementById("bntSearch")

var logradouro = document.getElementById("logradoro")
var bairro = document.getElementById("bairro")
var localidade = document.getElementById("localidade")
var uf = document.getElementById("uf")

// form.addEventListener("submit", (event)=>{})

bntSearch.addEventListener("click", (event) => {
    event.preventDefault()
    var userCep = cep.value

    fetch(`http://viacep.com.br/ws/${userCep}/json`)
        .then((response) => response.json())
        .then((data) => {
            logradouro.value = data.logradouro
            bairro.value = data.bairro
            localidade.value = data.localidade
            uf.value = data.uf
        })
})