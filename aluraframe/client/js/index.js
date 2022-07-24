import NegociacaoController from "./app/controllers/NegociacaoController.js";

const app = express.static()
app.use("/client", express.static('./client/'))

const negociacao = new NegociacaoController()

const formulario = document.querySelector('[data-form]')
formulario.addEventListener('submit', e => negociacao.novaNegociacao(e))

const botaoApagar = document.querySelector('[data-button-delet]')
const botaoImporte = document.querySelector('[data-button-import]')

botaoApagar.addEventListener('click', e => negociacao.apagarNegociacoes())
botaoImporte.addEventListener('click',e  => negociacao.importaNegociacao())

