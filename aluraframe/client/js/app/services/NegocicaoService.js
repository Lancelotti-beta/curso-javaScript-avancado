import Negociacao from "../models/Negociacao.js"
import HttpService from "./HttpService.js"

export default class NegociacaoSevice {

    constructor () {
        this._http = new HttpService()
    }

    obterNegociacoes () {
        return Promise.all([
            this.obtemNegociacaoDaSemana(),
            this.obtemNegociacaoDaSemanaPassada(),
            this.obtemNegociacaoDaSemanaRetrasada()
        ])
        .then(negociacao => {
            const negociacaoAtual = negociacao
                .reduce((arrayObtidoDaPromise, novoArray) => 
                    arrayObtidoDaPromise.concat(novoArray) ,[]
                )
            return negociacaoAtual
        })
        .catch(erro => {
            throw new Error(erro)
        })
    }

    obtemNegociacaoDaSemana() {
        return this._http.get('negociacoes/semana')
                .then(element => {
                    return element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    throw new Error(`Não foi possivel atualizar as negociações `)
                })

    }

    obtemNegociacaoDaSemanaPassada() {
        return this._http.get('negociacoes/anterior')
                .then(element => {
                    return element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    throw new Error(`Não foi possivel atualizar as negociações `)
                })

    }

    obtemNegociacaoDaSemanaRetrasada() {
        return this._http.get('negociacoes/retrasada')
                .then(element => {
                    return element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    )
                })
                .catch(erro => {
                    console.log(erro)
                    throw new Error(`Não foi possivel atualizar as negociações `)
                })
    }

}