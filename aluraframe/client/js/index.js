import NegociacaoController from "./app/controllers/NegociacaoController.js";

const negociacao = new NegociacaoController()


const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', e => 
    negociacao.novaNegociacao(e)
)

const botaoImporte = document.querySelector('[data-button-import]')
botaoImporte.addEventListener('click',e  => 
    negociacao.importaNegociacao()
)

const botaoApagar = document.querySelector('[data-button-delet]')
botaoApagar.addEventListener('click', e => 
    negociacao.apagarNegociacoes()
)


const colunaData = document.querySelector("[data-column-data]")
colunaData.addEventListener('click', e => 
    negociacao.ordena('data')
)

const colunaQuantidade = document.querySelector("[data-column-quantidade]")
colunaQuantidade.addEventListener('click', e => 
    negociacao.ordena('quantidade')
)

const colunaValor = document.querySelector("[data-column-valor]")
colunaValor.addEventListener('click', e =>
    negociacao.ordena('valor')
)

const colunaVolume = document.querySelector("[data-column-volume]")
colunaVolume.addEventListener('click', e => 
    negociacao.ordena('volume')
)

