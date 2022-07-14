export default class ListaDeNegociacao {
    constructor () {
        this._listaDeNegociacao = []
    }

    adicionaNegociacao (negociacao) {
        this._listaDeNegociacao.push(negociacao)
    }

    get listaDeNegociacao() {
        return [].concat(this._listaDeNegociacao)
    }

    deleta () {
        return this._listaDeNegociacao = []
    }
}