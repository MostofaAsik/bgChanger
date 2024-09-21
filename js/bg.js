const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.id
        if (id === 'red' || id === 'grey' || id === 'yellow' || id === 'tomato' || id === 'white' || id === 'black') {
            body.style.backgroundColor = id
        }
    })
})

console.log(buttons);