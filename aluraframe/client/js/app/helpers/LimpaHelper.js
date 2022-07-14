export default class LimpaHelper {
    constructor () {
        throw new Error ('Class LimpaHelper não pode ser instanciada!')
    }
    
    static limpaCampoDeNegociacao(data, quantidade, valor) {
        data.value = ''
        quantidade.value = 1
        valor.value = 0.0

        data.focus()
    }

    static focarEmUmCampo(input) {
        input.focus()
    }
    
}