class NegociacaoController {

    constructor () {
        
        const $ = document.querySelector.bind(document)
        this._infoData = $('#data')
        this._infoQuantidade = $('#quantidade')
        this._infoValor = $('#valor')
    }

    novaNegociacao (evento) {
        evento.preventDefault()

        const data = new Date(
            ...this._infoData.value
            .split('-')
            .map((valor, i) => valor - i % 2)
        )

        let negocia = new Negociacao(
            data,
            this._infoQuantidade.value,
            this._infoValor.value
        )

        console.log(negocia)
    }
}