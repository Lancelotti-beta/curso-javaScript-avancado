let valoresNosCampos = [
    document.querySelector('#data'),
    document.querySelector('#quantidade'),
    document.querySelector('#valor')
]

const tbody = document.querySelector('table tbody')
document.querySelector('.form').addEventListener('submit', e => {
    e.preventDefault()

    const tr = document.createElement('tr')
    valoresNosCampos.forEach( elemento => {
        const td = document.createElement('td')
        td.textContent = elemento.value
        tr.appendChild(td)
    })
    const volume = document.createElement('td')
    volume.textContent = valoresNosCampos[1].value * valoresNosCampos[2].value
    tr.appendChild(volume)

    tbody.appendChild(tr)

    valoresNosCampos[0].value = ''
    valoresNosCampos[1].value = 1
    valoresNosCampos[2].value = 0
    
    valoresNosCampos[0].focus()
})