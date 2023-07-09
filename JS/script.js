



const inputEl = document.querySelector("#password")

const upperCaseCheckEl = document.querySelector("#uppercase-check")
const numberCheckEl = document.querySelector("#number-check")
const symbolCheckEl = document.querySelector("#symbol-check")
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

    console.log(password)
}

function copy() {
    navigator.clipboard.writeText(inputEl.value)
}

const passwordLenghtEl = document.querySelector("#password-lenght")
passwordLenghtEl.addEventListener("input", function() {
    passwordLenght = passwordLenghtEl.value
    genPassword()
})
upperCaseCheckEl.addEventListener("click", genPassword)
numberCheckEl.addEventListener("click", genPassword)
symbolCheckEl.addEventListener("click", genPassword)

document.querySelector("#copy-1").addEventListener("click", copy)
document.querySelector("#copy-2").addEventListener("click", copy)


genPassword()