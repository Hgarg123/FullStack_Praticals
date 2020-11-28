const form= document.getElementById('form');
const username= document.getElementById('username');
const email= document.getElementById('email');
const password1= document.getElementById('password1');
const password2= document.getElementById('password2');

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputs();

})
function checkInputs(){
    const usernameVal=username.value.trim();
    const emailVal=email.value.trim();
    const password1Val=password1.value.trim();
    const password2Val=password2.value.trim();

    if(usernameVal===''){
        showError(username,"Username Can not be Blank");
    }
    else if(!isUsernameValid(usernameVal)){
        showError(username,"Username is not Valid");
    }
    else{
        showSuccess(username);
    }
    if(emailVal===''){
        showError(email,"Email ID Can not be Blank");
    }
    else if(!isEmailValid(emailVal)){
        showError(email,"Email ID is not Valid");
    }
    else{
        showSuccess(email);
    }

    if(password1Val===''){
        showError(password1,"Password Can not be Blank");
    }
    else{
        showSuccess(password1);
    }

    if(password2Val===''){
        showError(password2,"Password Can not be Blank");
    }
    else if(password2Val != password1Val){
        showError(password2,"Password not Matched");
    }
    else{
        showSuccess(password2);
    }
}
function showError(input,msg){
    const formControl = input.parentNode;
    formControl.className='form-control error';
    const small = formControl.querySelector('small');
    small.innerHTML=msg;
}
function showSuccess(input,msg){
    const formControl = input.parentNode;
    formControl.className='form-control success';
}
function isEmailValid(email){
    return /^([a-zA-Z0-9_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email)
}
function isUsernameValid(username){
    return /^([a-z0-9]+)$/.test(username);
}

