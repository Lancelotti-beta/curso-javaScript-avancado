class DataHelper {

    constructor () {
        throw new Error('Class DataHelper não pode ser instanciada')
    }

    static textoEmData(texto) {
        return new Date(...texto.split('-').map((valor, i) => valor - i % 2))
    }

    static dataFormatada(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }
}