// Get the form element
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});





let signupForm = document.querySelector('#Formsignup');

// Get the input elements
let EmailAddress = document.querySelector('#EmailAddress');


let Password = document.querySelector('#Password');
let confirmPassword = document.querySelector('#confirmPassword');


let emailtex = document.querySelector('#emailtex');
let Passwordtex = document.querySelector('#Passwordtex');
let ConfirmPasswordtex = document.querySelector('#ConfirmPasswordtex');



// Function to handle form submission
function handleFormSubmit(event) {
 
    emailtex.classList.add("hiden");
    Passwordtex.classList.add("hiden");
    ConfirmPasswordtex.classList.add("hiden");
    

    // Perform validation
    let filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let pwd_expression = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
   


    if (!filter.test(EmailAddress.value)) {
        emailtex.classList.remove("hiden");
        event.preventDefault();
    } else if (!pwd_expression.test(Password.value)) {
        Passwordtex.classList.remove("hiden");
        event.preventDefault();
    } else if (confirmPassword.value !== Password.value) {
        ConfirmPasswordtex.classList.remove("hiden");
        event.preventDefault();
    } 
}


signupForm.addEventListener('submit', handleFormSubmit);
