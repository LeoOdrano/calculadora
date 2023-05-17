// Inputs allowed to calculator
const allowedButtons = ["1","2","3","4","5","6","7","8","9","0","+","-","/","*","."] 

// Getting the Inputs Tag
let input = document.getElementById("numberInput")
let resultInput = document.getElementById("resultInput")
let body = document.querySelector("body")
let switcher = document.getElementById("darkModeSwitcher")


// Setting the keyboard input
input.addEventListener('keydown', (ev) => {
    ev.preventDefault()

    const key = allowedButtons.find(k => {
        if (k === ev.key) {
            return k
        } 
    })

    if (key !== undefined) {
        input.value += key
    } else if (ev.key === "Backspace") {
        input.value = input.value.slice(0, -1)
    }
    else if (ev.key === "Enter") {
        submit()
    }
})

// Setting the Clear Input

document.getElementById("clearButton").addEventListener('click', () => {
    input.value = input.value.slice(0, -1)
})

// Setting the calculator Keys

 // Getting the calculator buttons
const calcButtons = document.querySelectorAll(".calcButton")

 // Setting a event listener and inserting the value on input
calcButtons.forEach((button) => {
    button.addEventListener('click', () => {
        input.value += button.dataset.button
    })
})

// Setting the Equal Button

document.getElementById('equalButton').addEventListener('click', ()=> {
    submit()
})

// Submit Function

function submit() {
    try {
        resultInput.value = eval(input.value)
        resultInput.id = "success"
        input.value = ""
    } catch (err) {
        resultInput.value = "ERRO"
        resultInput.id = "error"
        return "Erro"
    }
}

// Dark Mode Switcher


switcher.addEventListener('click', () => {
    if (body.id === "darkMode") {
        body.id = "whiteMode"
    } else {
        body.id = "darkMode"
    }
})
