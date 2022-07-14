const numOp = document.querySelectorAll('.numop')
const plusOp = document.getElementById('plusOp')
const minusOp = document.getElementById('minusOp')
const timesOp = document.getElementById('timesOp')
const divideOp = document.getElementById('divideOp')
const dotOp = document.getElementById('dotOp')
const number = document.querySelectorAll('.number')
const display = document.getElementById('display')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const on = document.querySelector('.on')
const off = document.querySelector('.off')
const arrow = document.querySelector('.arrow')

numOp.forEach((eachnumOp) => {
    eachnumOp.addEventListener('click', () => {
        if ((display.innerHTML).length > 0) {
            const lastItem = (display.innerHTML).charAt((display.innerHTML).length - 1)
            if ((eachnumOp.innerHTML == plusOp.innerHTML || eachnumOp.innerHTML == minusOp.innerHTML || eachnumOp.innerHTML == timesOp.innerHTML || eachnumOp.innerHTML == divideOp.innerHTML || eachnumOp.innerHTML == dotOp.innerHTML) && (lastItem == plusOp.innerHTML || lastItem == minusOp.innerHTML || lastItem == timesOp.innerHTML || lastItem == divideOp.innerHTML || lastItem == dotOp.innerHTML)) {
                display.innerHTML = (display.innerHTML).slice(0, -1)
                display.innerHTML += eachnumOp.innerHTML
            }else if (display.innerHTML == "0") {
                display.innerHTML = ""
                display.innerHTML += eachnumOp.innerHTML
            }else {
                display.innerHTML += eachnumOp.innerHTML
            }
        }else {
            display.innerHTML += eachnumOp.innerHTML
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
