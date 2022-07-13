class NegociacaoViews {
    constructor (elemento) {
        this._elemento = elemento
    }

    _criaTabelaDeNegociacao (info) {
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
                        info.listaDeNegociacao.map(negociacao => {`
                            <tr>
                                <td>${DataHelper.dataFormatada(negociacao.data)}</td>
                                <td>${negociacao.quantidade}</td>
                                <td>${negociacao.valor}</td>
                                <td>${negociacao.volume}</td>
                            </tr>
                        `}).join('')
                    }
                </tbody>
                <tfoot>
                </tfoot>
            </table>
        `
    }

    rederizaTabela(infos) {
        this._elemento.innerHTML = this._criaTabelaDeNegociacao(infos)
    }

}