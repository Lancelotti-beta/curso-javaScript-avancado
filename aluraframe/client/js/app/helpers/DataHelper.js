class DataHelper {

    constructor () {
        throw new Error('Class DataHelper não pode ser instanciada')
    }

    static textoEmData(texto) {
        if(!/^\d{4}-\d{2}-\d{2}$/.test(texto)) throw new Error('Formato Inválido! A data deve ser aaaa-mm-dd')
        return new Date(...texto.split('-').map((valor, i) => valor - i % 2))
    }

    static dataFormatada(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`
    }

}