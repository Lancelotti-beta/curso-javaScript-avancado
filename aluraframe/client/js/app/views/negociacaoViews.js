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
                        <th data-column-data>DATA</th>
                        <th data-column-quantidade>QUANTIDADE</th>
                        <th data-column-valor>VALOR</th>
                        <th data-column-volume>VOLUME</th>
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
                        ${info.volumeTotal}
                    </td>
                </tfoot>
            </table>
        `
    }
}
