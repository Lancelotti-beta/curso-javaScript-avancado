import HttpService from "./app/services/HttpService.js";

const data = document.querySelector('[data-input="data"]')
const quantidade = document.querySelector('[data-input="quantidade"]')
const valor = document.querySelector('[data-input="valor"]')

const botaoEnviar = document.querySelector('[data-button-enviar]')
botaoEnviar.addEventListener('click', e => {
    e.preventDefault();
    console.log("Enviando post");

    //aqui você deve ler os dados do formulário
    const objeto = {
        data : data.value,
        quantidade : quantidade.value,
        valor : valor.value
    }

    // refatoração da aula
    new HttpService()
        .post('/negociacoes', objeto)
        .then(() => {

            data.value = ''
            quantidade.value = 1
            valor.value = 0.0
            console.log(`Negociação enviado com sucesso!`)
        })
        .catch(erro => console.log(`Não foi possivel enviar ${erro}`))

})
