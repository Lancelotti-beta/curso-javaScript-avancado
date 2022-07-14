class Views {

    constructor (elemento) {
        this._elemento = elemento
    }

    criaElemento () {
        throw new Error('O método criaElemento deve ser implementado');
    }
 
    renderiza (elemento) {
        this._elemento.innerHTML = this.criaElemento(elemento)
    }
}
