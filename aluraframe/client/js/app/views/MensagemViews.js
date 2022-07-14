class MensagemViews extends Views {

    constructor (elemento) {
        super(elemento)
    }

    criaElemento (texto) {
        return texto.mensagem ? `<p class="alert alert-info"> ${texto.mensagem} </p>` : `<p></p>`
    }
}
