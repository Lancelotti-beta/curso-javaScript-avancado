export default class ListaDeNegociacao {
    constructor (lista) {
        this._listaDeNegociacao = []
        this._atualizaView = lista

        //this._contexto = contexto
    }

    adicionaNegociacao (negociacao) {
        this._listaDeNegociacao.push(negociacao)
        this._atualizaView(this)

        /* ultilizamos esta linha quando usamos function e não arrow function */
        //Reflect.apply(this._atualizaView, this._contexto, [this])
    }
    
    get listaDeNegociacao() {
        return [].concat(this._listaDeNegociacao)
    }
    
    deleta () {
        this._listaDeNegociacao = []
        this._atualizaView(this)
        //Reflect.apply(this._atualizaView, this._contexto, [this])
    }
}