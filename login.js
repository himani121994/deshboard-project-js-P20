// function show(){
//     let name= document.querySelector('#name').value;
//     let email= document.querySelector('#email').value;
//     let pass= document.querySelector('#password').value;
//     // console.log(name,number,email,pass,cpass);
//     if(name === ""){
//         document.querySelector('#error_name').innerHTML = "please Enter your name";
//         document.querySelector('#error_name').style.color = "red";
//         document.querySelector('#error_name').style.fontWeight = "700";
//         document.getElementById('name').style.border = "2px solid red";
//         document.getElementById('name').style.outline = "red";
//         return false;
//       }  
//     else if(email === ""){
//      document.querySelector('#error_email').innerHTML = "please Enter your email";
//      document.querySelector('#error_email').style.color = "red";
//      document.querySelector('#error_email').style.fontWeight = "700";
//      document.getElementById('email').style.border = "2px solid red";
//      document.getElementById('email').style.outline = "red";
//      return false;
//     }
//     else if(!(email.includes('@gmail.com') || email.includes('@yahoo.com') || email.includes('@outlook.com'))){
//      document.querySelector('#error_email').innerHTML = "please enter valid email";
//      document.querySelector('#error_email').style.color = "red";
//      document.querySelector('#error_email').style.fontWeight = "700";
//      document.getElementById('email').style.border = "2px solid red";
//      document.getElementById('email').style.outline = "red";
//      return false;
//     }
//        else if(!pass.match(/[1234567890]/)){
//         alert("password should be storng ");
//         return false;
//        }
//        else if(!pass.match(/[QWERTYUIOPASDFGHJKLZXCVBNM]/)){
//         alert("password should be storng ")
//         return false;
//        }
//        else if(!pass.match(/[qwertyuiopasdfghjklzxcvbnm]/)){
//         alert("password should be storng ")
//         return false;
//        }
//        else if(pass.length != 8){
//         alert("should be 8 digit")
//         return false;
//        }
//        else{
//         alert("submitted")
//         console.log(name,email,pass);
//        }
// }

// function generator(){
//     let str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ//\\**';// \ This is the preedefind caractor in js

//     finalout = " ";
//     for( let i =0;i<6;i++){
//         let random = Math.random();// 0 to 1 multiply
//         let ramdomMultiply = str.length*random;
//         let afterFloor = Math.floor(ramdomMultiply);
//         let output = str.charAt(afterFloor)
//         finalout = finalout + output;
//     }
//     document.querySelector('#block').style.display = "block";
//     document.querySelector('#show').innerHTML = finalout;
//     document.querySelector('#main-div').innerHTML = "";
//     document.querySelector('#main-div').style.display = "none";
//     return false;
// }
// function succes(){
//     alert("Succesfully register")
// }

function show() {
    let name = document.querySelector('#name').value;
    let email = document.querySelector('#email').value;
    let pass = document.querySelector('#password').value;

    if (name.trim() === "") {
        showError('#error_name', "Please enter your name");
        return false;
    } else if (email.trim() === "") {
        showError('#error_email', "Please enter your email");
        return false;
    } else if (!(email.includes('@gmail.com') || email.includes('@yahoo.com') || email.includes('@outlook.com'))) {
        showError('#error_email', "Please enter a valid email");
        return false;
    } else if (!checkPasswordStrength(pass)) {
        showError('#error_password', "Password should be strong");
        return false;
    } else {
        console.log(name, email, pass);
        alert("Submitted");
        generator();
        return true;
    }
}

function checkPasswordStrength(password) {
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
}

function showError(selector, message) {
    let errorElement = document.querySelector(selector);
    errorElement.innerHTML = message;
    errorElement.style.color = "red";
    errorElement.style.fontWeight = "700";
    let inputElement = document.querySelector(selector.replace('#error_', '#'));
    inputElement.style.border = "2px solid red";
    inputElement.style.outline = "red";
}
let finalout = "";
function generator() {
    let str = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ//\\**';

    for (let i = 0; i < 6; i++) {
        let random = Math.random();
        let randomIndex = Math.floor(str.length * random);
        finalout += str.charAt(randomIndex);
    }
    document.querySelector('#block').style.display = "block";
    document.querySelector('#show').innerHTML = finalout;
    document.querySelector('#main-div').innerHTML = "";
    document.querySelector('#main-div').style.display = "none";
    return false;
}

function succes() {
    let code = document.querySelector('#enter-code').value;
    if(code!=finalout){
        alert("Wrong code enter");
    }else{
        alert("Successfully registered");
    }
}
