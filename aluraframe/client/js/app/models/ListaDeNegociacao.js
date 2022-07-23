export default class ListaDeNegociacao {
    constructor () {
        this._listaDeNegociacao = []

    }

    adicionaNegociacao (negociacao) {
        this._listaDeNegociacao.push(negociacao)

        /* ultilizamos esta linha quando usamos function e não arrow function */
        //Reflect.apply(this._atualizaView, this._contexto, [this])
    }

    deleta () {
        this._listaDeNegociacao = []
    }
    
    get listaDeNegociacao() {
        return [].concat(this._listaDeNegociacao)
    }

    get volumeTotal () {
        return this._listaDeNegociacao.reduce(
            (acumulador, negociacao) => 
                acumulador += negociacao.volume, 0.0
            )
    }
    
}