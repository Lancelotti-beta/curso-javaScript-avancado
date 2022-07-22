import Negociacao from "../models/Negociacao.js";
import ListaDeNegociacao from "../models/ListaDeNegociacao.js";
import Mensagem from "../models/Mensagem.js";
import Bind from "../helpers/Bind.js";
import DataHelper from "../helpers/DataHelper.js";
import LimpaHelper from "../helpers/LimpaHelper.js";
import MensagemViews from "../views/MensagemViews.js";
import NegociacaoViews from "../views/NegociacaoViews.js";
import NegociacaoSevice from "../services/NegocicaoService.js";

export default class NegociacaoController {

    constructor () {
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')

        this._listaDeNegociacoes = new Bind(new ListaDeNegociacao(),
            new NegociacaoViews($('#tabelaNegociacao')),
            'adicionaNegociacao','deleta'
        )


        this._texto = new Bind(new Mensagem(), 
            new MensagemViews($('#paragrafo')),
            'mensagem', 'criaMensagem'
        )
    }

    novaNegociacao (e) {
        e.preventDefault()
        this._listaDeNegociacoes.adicionaNegociacao(this._criaNegociacao())
        this._texto.criaMensagem = `Negociação adicionada com Sucesso!`
        LimpaHelper.limpaCampoDeNegociacao(this._infoData, this._infoQuantidade, this._infoValor)

    }

    _criaNegociacao () {
        return new Negociacao(
            DataHelper.textoEmData(this._infoData.value),
            this._infoQuantidade.value,
            this._infoValor.value
        )
    }

    importaNegociacao() {
        const negociacoesDaSemana = new NegociacaoSevice()
        
        negociacoesDaSemana.obtemNegociacaoDaSemana((erro, elemento) => {
            if(erro) {
                this._texto.criaMensagem = `${erro}`
                return
            }

            elemento.forEach(element =>
                this._listaDeNegociacoes.adicionaNegociacao(element)
            )
            this._texto.criaMensagem = `Negociações atualizadas com Sucesso!`
        })
    }

    apagarNegociacoes () {
        this._listaDeNegociacoes.deleta()
        this._texto.criaMensagem = `As negociação foram com deletadas Sucesso!`

    }
}
