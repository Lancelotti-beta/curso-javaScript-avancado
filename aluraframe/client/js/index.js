import NegociacaoController from "./app/controllers/NegociacaoController.js";

const negociacao = new NegociacaoController()

const formulario = document.querySelector('[data-form]')
const botaoApagar = document.querySelector('[data-button-delet]')
const botaoImporte = document.querySelector('[data-button-import]')

formulario.addEventListener('submit', e => negociacao.novaNegociacao(e))

botaoApagar.addEventListener('click', e => negociacao.apagarNegociacoes())
botaoImporte.addEventListener('click',e  => negociacao.importaNegociacao())

