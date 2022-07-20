export default class ListaDeNegociacao {
    constructor () {
        this._listaDeNegociacao = []

        //this._contexto = contexto
    }

    adicionaNegociacao (negociacao) {
        this._listaDeNegociacao.push(negociacao)

        /* ultilizamos esta linha quando usamos function e não arrow function */
        //Reflect.apply(this._atualizaView, this._contexto, [this])
    }
    
    get listaDeNegociacao() {
        return [].concat(this._listaDeNegociacao)
    }
    
    deleta () {
        this._listaDeNegociacao = []

        //Reflect.apply(this._atualizaView, this._contexto, [this])
    }
}