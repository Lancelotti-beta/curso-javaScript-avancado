export default class Mensagem  {
    constructor (frase='') {
        this._texto = frase
    }

    get mensagem () {
        return this._texto
    }

    set criaMensagem (paragrafo) {
        this._texto = paragrafo
    }
}
