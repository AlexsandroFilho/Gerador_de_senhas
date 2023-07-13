



const inputEl = document.querySelector("#password")

const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")
const securityBarEl = document.querySelector("#security-bar")

let passwordLenght = 16

function genPassword() {

    let chars= "abcdefghjklnmpqrstuvwxyzo"

    const upperCaseChars = "ABCDEFGHJKLNMPQRSTUVWZYZ"
    const numberChars = "123456789"
    const symbolChars = "?!@&*()[]{}"

    if (upperCaseCheckEl.checked) {
        chars += upperCaseChars
    }

    if (numberCheckEl.checked) {
        chars += numberChars
    }

    if (symbolCheckEl.checked) {
        chars += symbolChars
    }

    let password = ""

    for(let i = 0; i < passwordLenght; i++) {
        const randomNumber = Math.floor(Math.random() * chars.length)

        password += chars.substring(randomNumber, randomNumber + 1)
    }

    inputEl.value = password

    fontSize()
    qualityPassword()
    
}

function qualityPassword () {
    const percent = Math.round(
        (passwordLenght / 64) * 20 +
        (upperCaseCheckEl.checked ? 15 : 0) +
        (numberCheckEl.checked ? 30 : 0) +
        (symbolCheckEl.checked ? 35 : 0)
        )
    

    securityBarEl.style.width = `${percent}%`

    if (percent > 69) {
        securityBarEl.classList.remove("danger")
        securityBarEl.classList.remove("warning")
        securityBarEl.classList.add("safe")
    } else if (percent > 50) {
        securityBarEl.classList.remove("danger")
        securityBarEl.classList.add("warning")
        securityBarEl.classList.remove("safe")
    } else {
        securityBarEl.classList.add("danger")
        securityBarEl.classList.remove("warning")
        securityBarEl.classList.remove("safe")
    }    

    if (percent >= 100) {
        securityBarEl.classList.add("completed")
    } else {
        securityBarEl.classList.remove("completed")
    }
    
}

function fontSize () {
    if (passwordLenght > 45) {
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.add("font-xxs")
    } else if (passwordLenght > 32) {
        inputEl.classList.remove("font-sm")
        inputEl.classList.add("font-xs")
        inputEl.classList.remove("font-xxs")
    } else if (passwordLenght > 22) {
        inputEl.classList.add("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
    } else {
        inputEl.classList.remove("font-sm")
        inputEl.classList.remove("font-xs")
        inputEl.classList.remove("font-xxs")
    }
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLenghtEl = document.querySelector("#password-length")
passwordLenghtEl.addEventListener("input", function() {
    passwordLenght = passwordLenghtEl.value
    document.querySelector("#password-length-text").innerText = passwordLenght
    genPassword()
})
upperCaseCheckEl.addEventListener("click", genPassword)
numberCheckEl.addEventListener("click", genPassword)
symbolCheckEl.addEventListener("click", genPassword)

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)
document.querySelector("#refresh").addEventListener("click", genPassword)


genPassword()