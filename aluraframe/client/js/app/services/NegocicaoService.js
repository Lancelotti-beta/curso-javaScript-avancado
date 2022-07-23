import Negociacao from "../models/Negociacao.js"
import HttpService from "./HttpService.js"

export default class NegociacaoSevice {

    constructor () {
        this._http = new HttpService()
    }

    obtemNegociacaoDaSemana() {
        return new Promise((resolve ,reject) => {
            this._http.get('negociacoes/semana')
                .then(element => {
                    resolve(element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                })
                .catch(erro => {
                    reject(`Não foi possivel atualizar as negociações`)
                    throw new Error(erro)
                })
        })
    }

    obtemNegociacaoDaSemanaPassada() {
        return new Promise((resolve ,reject) => {
            this._http.get('negociacoes/anterior')
                .then(element => {
                    resolve(element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                })
                .catch(erro => {
                    reject(`Não foi possivel atualizar as negociações`)
                    throw new Error(erro)
                })
        })
    }

    obtemNegociacaoDaSemanaRetrasada() {
        return new Promise((resolve ,reject) => {
            this._http.get('negociacoes/retrasada')
                .then(element => {
                    resolve(element.map(objeto => 
                        new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor)
                    ))
                })
                .catch(erro => {
                    reject(`Não foi possivel atualizar as negociações`)
                    throw new Error(erro)
                })
        })
    }

}