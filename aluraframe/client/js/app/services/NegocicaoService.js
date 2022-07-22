import Negociacao from "../models/Negociacao.js"

export default class NegociacaoSevice {
    obtemNegociacaoDaSemana(callBack) {

        const xhr = new XMLHttpRequest()
        xhr.open('GET', 'negociacoes/semana')
        xhr.onreadystatechange = () => {
            if(xhr.readyState === 4) {
                if (xhr.status === 200) {
                    callBack(null, 
                        JSON.parse(xhr.responseText)
                        .map(objeto => 
                            new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                        )
                    )
                } else {
                    new Error(xhr.responseText)
                    callBack(`Não foi possivel atualizar as negociações`, null)
                }
            }
        }
        xhr.send()
    }
}