const userName = document.querySelector('.user-name')
const email = document.querySelector('.email')
const password = document.querySelector('.password')
const password2 = document.querySelector('.password2')

const modal = document.querySelector('.modal')
const existLink = document.querySelector('.exist')

const signupForm = document.querySelector('.form')

let hasError = false;

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInput();
})

existLink.addEventListener('click', function () {
    modal.style.display = "none"
})

function checkInput () {
    userNameValue = userName.value.trim();
    emailValue = email.value.trim();
    passwordValue = password.value.trim();
    password2Value = password2.value.trim();
//  user name
    if (userNameValue == "") {
        addError(userName,"user name cannot be blank");
        hasError = true
    }else {
        addSuccess(userName);
        hasError = false
    }
//  email
    if (emailValue == "") {
        addError(email,"email cannot be blank")
        hasError = true
    }else if (!isEmail) {
        addError(email,"email is not validate");
    }else {
        addSuccess(email)
        hasError = false
    }
// password
    if (passwordValue == "") {
        addError(password,"password cannot be blank")
        hasError = true
    }else {
        addSuccess(password)
        hasError = false
    }

//  confirm password
    if (password2Value == "") {
        addError(password2,"password cannot be blank")
        hasError = true
    }else if (password2Value != passwordValue) {
        addError(password2,"password must be same")
        hasError = true
    }else {
        addSuccess(password2)
        hasError = false
    }

    // open modal
    if (!hasError) {
        modal.style.display = "block"
    }
}


function addSuccess (input) {
    const successInput = input.parentElement;
    successInput.classList = "form-control success"
}

function addError (input,msg) {
    const errorInput = input.parentElement;
    const errText = errorInput.querySelector('small')
    errorInput.classList = "form-control error"
    errText.innerHTML = msg;
}

function isEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    return (false)
}

// modal 


