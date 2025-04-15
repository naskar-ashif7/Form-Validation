const form = document.querySelector("form");


const nameError = document.querySelector("#name-error");
const phoneError = document.querySelector("#phone-error");
const emailError = document.querySelector("#email-error");
const msgError = document.querySelector("#msg-error");
const submitError = document.querySelector("#submit-error");


let contactName = document.querySelector("#contact-name");
let contactPhone = document.querySelector("#contact-phone");
let contactEmail = document.querySelector("#contact-email");
let contactMsg = document.querySelector("#contact-message");




const nameValidation = /^[A-Za-z]+ [A-Za-z]+$/;
const phoneValidation =  /^[0-9]{10}$/;
const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;





function validateName() {
    if((contactName.value).length === 0){
        nameError.innerHTML = "*Name is required";
        return false;
    } if(!(contactName.value).match(nameValidation)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    const phoneValue = contactPhone.value.trim();
    
    if (phoneValue.length === 0) {
        phoneError.innerHTML = "*Number is required";
        return false;
    } else if (!phoneValidation.test(phoneValue)) {
        phoneError.innerHTML = "*Enter only digits";
        return false;
    }  else if (phoneValue.length !== 10) {
        phoneError.innerHTML = "*Phone number must be 10 digit";
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail(){

    if((contactEmail.value).length === 0){
        emailError.innerHTML = "*Email is required";
        return false;
    }else if(!(contactEmail.value).match(emailValidation)){
        emailError.innerHTML = "*Enter a valid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let msgLength = 25; 
    let left = msgLength - (contactMsg.value).length;
    if(left>0){
      msgError.innerHTML = left+' more charecters are required';
    return false;
    }
    msgError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
     return true;

}





contactName.addEventListener("keyup",validateName);
contactPhone.addEventListener("keyup",validatePhone);
contactEmail.addEventListener("keyup",validateEmail);
contactMsg.addEventListener("keyup",validateMessage);

form.addEventListener("submit", (e)=>{
    e.preventDefault();
   if(validateName() && validatePhone() && validateEmail() && validateMessage()){
    const submitError = document.querySelector("#submit-error");
    submitError.style.color = "Green";
    submitError.innerHTML = "Form submitted successfully!";
   } else{
    submitError.style.display = "Block";
    submitError.innerHTML = "*Please fill up all required field";
   setTimeout(function(){submitError.style.display = "Noneuu";},3000);
}

});
