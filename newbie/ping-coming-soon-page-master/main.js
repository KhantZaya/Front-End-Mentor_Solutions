const emailForm = document.querySelector('.email-form')
const emailInput = document.querySelector('.email-input')

const modal = document.querySelector('.modal')
const link = document.querySelector('.link')

emailForm.addEventListener('submit', function (e) {
    e.preventDefault()
    checkInputVale()
})

link.addEventListener('click', () => {
    modal.style.display = "none"
})

function checkInputVale () {
    const emailValue = emailInput.value.trim();

    if (emailValue === "") {
        console.log('empty');
        setError(emailInput, "Email cannot be blank")
    }else if (!isEmail(emailValue)) {
        setError(emailInput, "Email is not validate")
    }else {
        //alert("success")
        setSuccess(emailInput)
    }
}

function isEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function setError (input, msg) {
    const inputControl = input.parentElement
    const errorMsg = inputControl.querySelector('small')
    errorMsg.innerHTML = msg
    inputControl.classList = "input-control active"
}
function setSuccess(input) {
    const inputControl = input.parentElement
    inputControl.classList.remove('active')

    modal.style.display = "block"
}