class NegociacaoController {

    constructor () {
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')

        this._listaDeNegociacoes = new ListaDeNegociacao()
        this._tabela = new NegociacaoViews($('#tabelaNegociacao'))

        this._tabela.rederizaTabela(this._listaDeNegociacoes)
    }

    novaNegociacao (e) {
        e.preventDefault()

        this._listaDeNegociacoes.adicionaNegociacao(this._criaNegociacao())
        LimpaHelper.limpaCampoDeNegociacao(this._infoData, this._infoQuantidade, this._infoValor)
        this._tabela.rederizaTabela(this._listaDeNegociacoes)

    }

    _criaNegociacao () {
        return new Negociacao(
            DataHelper.textoEmData(this._infoData.value),
            this._infoQuantidade.value,
            this._infoValor.value
        )
    }
}