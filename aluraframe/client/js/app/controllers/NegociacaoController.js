import Negociacao from "../models/Negociacao.js";
import ListaDeNegociacao from "../models/ListaDeNegociacao.js";
import Mensagem from "../models/Mensagem.js";
import DataHelper from "../helpers/DataHelper.js";
import LimpaHelper from "../helpers/LimpaHelper.js";
import MensagemViews from "../views/MensagemViews.js";
import NegociacaoViews from "../views/negociacaoViews.js";

export default class NegociacaoController {

    constructor () {
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')

        let self = this
        this._listaDeNegociacoes  = new Proxy(new ListaDeNegociacao(), {
            get(target, props, recevier) {
                if((['adicionaNegociacao','deleta'].includes(props)) && ( typeof(target[props]) === typeof(Function))) {
                    return function() {
                        Reflect.apply(target[props], target, arguments)
                        self._tabela.renderiza(target)
                    }
                }
        
                return Reflect.get(target, props, recevier)
            }
        })

        /*
            //Codigo anterior, sem Proxy
            this._listaDeNegociacoes = new ListaDeNegociacao(estanciListaNegocicao =>
                this._tabela.renderiza(estanciListaNegocicao)
            )

        */

        this._tabela = new NegociacaoViews($('#tabelaNegociacao'))
        this._tabela.renderiza(this._listaDeNegociacoes)

        this._texto = new Mensagem()
        this._paragrafo = new MensagemViews($('#paragrafo'))
        this._paragrafo.renderiza(this._texto)
    }

    novaNegociacao (e) {
        e.preventDefault()
        this._listaDeNegociacoes.adicionaNegociacao(this._criaNegociacao())

        this._texto.criaMensagem = `Negociação adicionada com Sucesso!`
        this._paragrafo.renderiza(this._texto)

        LimpaHelper.limpaCampoDeNegociacao(this._infoData, this._infoQuantidade, this._infoValor)
    }

    _criaNegociacao () {
        return new Negociacao(
            DataHelper.textoEmData(this._infoData.value),
            this._infoQuantidade.value,
            this._infoValor.value
        )
    }

    apagarNegociacoes () {
        this._listaDeNegociacoes.deleta()

        this._texto.criaMensagem = `As negociação foram com deletadas Sucesso!`
        this._paragrafo.renderiza(this._texto)
    }
}
