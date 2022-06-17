form = document.querySelector("form")

let valid = 0

const addError = (tag) => {
    errorParagraph = tag.nextElementSibling
    tag.classList.add("invalid")
    errorParagraph.classList.remove("invisible")
}

const removeError = (tag) => {
    errorParagraph = tag.nextElementSibling
    tag.classList.remove("invalid")
    errorParagraph.classList.add("invisible")
}

const validateLength = tag => {
    if (tag.value.length < 1){
        addError(tag)
    }
    else {
        removeError(tag)
    }
}

const validateEmail = tag => {
    if (!tag.value.includes("@")) {
        addError(tag)
    }
    else {
        removeError(tag)
    }

}

const autoValidate = tag => {
    
    tag.addEventListener("input", (e) => {
        if (e.target.type == "email"){
            validateEmail(e.target)
            return false
        }
        else {
            validateLength(e.target)
            return true
        }

    })
}


form.addEventListener("submit", e => {
    e.preventDefault()
    firstNameInput = e.target.fName
    lastNameInput = e.target.lName
    emailInput = e.target.email
    passwordInput = e.target.password

    validateLength(firstNameInput)
    autoValidate(firstNameInput)
    validateLength(lastNameInput)
    autoValidate(lastNameInput)
    validateEmail(emailInput)
    autoValidate(emailInput)
    validateLength(passwordInput)
    autoValidate(passwordInput)

    console.log(valid)


})