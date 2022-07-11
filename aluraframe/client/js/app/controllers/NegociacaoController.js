class NegociacaoController {

    constructor () {
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')
    }

    novaNegociacao (e) {
        e.preventDefault()

        let negocia = new Negociacao(
            DataHelper.textoEmData(this._infoData.value),
            this._infoQuantidade.value,
            this._infoValor.value
        )

        console.log(`Data da negociação: ${DataHelper.dataFormatada(negocia.data)}
                \nQuantidade: ${negocia.quantidade}
                \nValor: ${negocia.valor}
                \nVolume da Negociação: ${negocia.volume}
            `
        )
    }

    limpaCampoDeNegociacao() {
        this._infoData.value = ''
        this._infoQuantidade.value = 1
        this._infoValor.value = 0

        this._infoData.focus()
    }
}