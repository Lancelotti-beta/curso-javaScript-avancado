import NegociacaoController from "./app/controllers/NegociacaoController.js";

const formulario = document.querySelector('[data-form]')
const botaoApagar = document.querySelector('[data-button-delet]')
const negociacao = new NegociacaoController();

formulario.addEventListener('submit', e => negociacao.novaNegociacao(e))
botaoApagar.addEventListener('click', e => negociacao.apagarNegociacoes())
