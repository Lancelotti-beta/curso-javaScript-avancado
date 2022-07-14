import NegociacaoController from "./app/controllers/NegociacaoController.js";

const formulario = document.querySelector('[data-form]')
const negociacao = new NegociacaoController();

formulario.addEventListener('submit', e => negociacao.novaNegociacao(e))
