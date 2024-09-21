const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const id = e.target.id

        //way-2.1 >>>myWAy
        // if (id === 'red' || id === 'grey' || id === 'yellow' || id === 'tomato' || id === 'white' || id === 'black') {
        //     body.style.backgroundColor = id
        // }

        // way-2.2
        if (id === 'red') {
            body.style.backgroundColor = id
        }
        if (id === 'grey') {
            body.style.backgroundColor = id
        }
        if (id === 'yellow') {
            body.style.backgroundColor = id
        }
        if (id === 'tomato') {
            body.style.backgroundColor = id
        }
        if (id === 'white') {
            body.style.backgroundColor = id
        }
        if (id === 'black') {
            body.style.backgroundColor = id
        }


    })
})