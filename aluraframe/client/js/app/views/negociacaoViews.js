import Views from "./Views.js"
import DataHelper from "../helpers/DataHelper.js"

export default class NegociacaoViews extends Views {

    constructor (elemento) {
        super(elemento)
    }

    criaElemento (info) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        info.listaDeNegociacao.map(negociacao => `
                            <tr>
                                <td>${DataHelper.dataFormatada(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `).join('')
                    }
                </tbody>  
                </tfoot>
                    <td colspan="3"></td>
                    <td>
                        ${info.listaDeNegociacao.reduce((acumulador, negociacao) => acumulador += negociacao.volume, 0.0)}
                    </td>
                </tfoot>
            </table>
        `
    }
}
