const operation = document.querySelectorAll('.numop')
const display = document.getElementById('display')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const on = document.querySelector('.on')
const off = document.querySelector('.off')
const arrow = document.querySelector('.arrow')

operation.forEach((eachOperation) => {
    eachOperation.addEventListener('click', () => {
        if (display.innerHTML == 0) {
            display.innerHTML = ""
            display.innerHTML += eachOperation.innerHTML
        }else {
            display.innerHTML += eachOperation.innerHTML
        }
    })
})

equal.addEventListener('click', () => {
    display.innerHTML = eval(display.innerHTML)
})

clear.addEventListener('click', () => {
    display.innerHTML = ""
})

on.addEventListener('click', () => {
    display.innerHTML = 0
})

off.addEventListener('click', () => {
    display.innerHTML = ""
})

arrow.addEventListener('click', () => {
    display.innerHTML = (display.innerHTML).slice(0, (display.innerHTML).length - 1)
})



