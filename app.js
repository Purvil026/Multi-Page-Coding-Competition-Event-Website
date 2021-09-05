// <<<<<<<<<< Navigation >>>>>>>>>> //

const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',hide);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

function hide(){
    mainMenu.style.top = '-100%';
}

// <<<<<<<<<< Form Registeration >>>>>>>>>> //
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUsername = false;
let validEmail = false;
let validPhone = false;

$('#failure').hide();
$('#success').hide();

username.addEventListener('blur',()=>{
    console.log('username is blurred');
    // Validate username here
    let regex = /^[a-zA-Z]([0-9a-zA-Z]){3,12}$/; // must start with an alphabet (case insensitive), can contain alphabets as well as numbers and should be b/w 3-12 characters
    let str = username.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log('Your name is valid');
        username.classList.remove('is-invalid');
        validUsername = true;
    }
    else{
        console.log('Your name is not valid');
        username.classList.add('is-invalid');
        validUsername = false;
    }
})

email.addEventListener('blur',()=>{
    console.log('email is blurred');
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/; 
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})

phone.addEventListener('blur',()=>{
    console.log('phone is blurred');
    // Validate phone here
    let regex = /^([0-9]){10}$/; 
    let str = phone.value;
    console.log(regex, str);
    if (regex.test(str)){
        console.log('Your phone no. is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone no. is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;
    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log('You clicked on submit');
    if(validUsername && validEmail && validPhone){
        console.log('Phone, email and user are valid. Submitting the form now');
        let success = document.getElementById('success');
        let failure = document.getElementById('failure');
        success.classList.add('show');
        $('#failure').hide();
        $('#success').show();
    }
    else{
        console.log('Something is invalid. Hence form will not be submitted');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        $('#success').hide();
        $('#failure').show();
    }
})
