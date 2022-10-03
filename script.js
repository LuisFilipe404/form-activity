const submitButton = document.querySelector('.submitButton')
const clearButton = document.querySelector('.clearBtn')

const userName = document.querySelector('.username')



submitButton.addEventListener('click', (e) => {

    const uName = userName.value
    submitButton.innerHTML = 'Enviado'
    submitButton.classList.add('clear')
    submitButton.disabled = true
    clearButton.disabled = true

    e.preventDefault()
    

    alert(`O formulário de ${uName} foi registrado com sucesso!`)
})



clearButton.addEventListener('click', () => {
    clearButton.classList.add('clear')
    clearButton.innerHTML = 'Limpo'
    setTimeout(() => {
        clearButton.classList.remove('clear')
        clearButton.innerHTML = 'Limpar'
    }, 1000)
    console.log ('Fim')
})