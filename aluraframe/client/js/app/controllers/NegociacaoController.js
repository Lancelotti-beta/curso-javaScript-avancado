class NegociacaoController {

    constructor () {
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')

        this._listaDeNegociacoes = new ListaDeNegociacao()
    }

    novaNegociacao (e) {
        e.preventDefault()

        this._listaDeNegociacoes.adicionaNegociacao(this._criaNegociacao())
        LimpaHelper.limpaCampoDeNegociacao(this._infoData, this._infoQuantidade, this._infoValor)

        console.log(this._listaDeNegociacoes.listaDeNegociacao)
    }

    _criaNegociacao () {
        return new Negociacao(
            DataHelper.textoEmData(this._infoData.value),
            this._infoQuantidade.value,
            this._infoValor.value
        )
    }
}