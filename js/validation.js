alert("Validation");
let valid = document.getElementById('validate');

var email = document.getElementById('email').value;
var password1 = document.getElementById('password1').value;
var password2 = document.getElementById('password2').value;
console.log(password1);
console.log(password2);
if (email.length < 4) {
    alert('Please enter an email address.');
    return;
}
if (password.length < 4) {
    alert('Please enter a password.');
    return;
}
// Sign in with email and pass.
// [START createwithemail]
// firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // [START_EXCLUDE]
//     if (errorCode == 'auth/weak-password') {
//         alert('The password is too weak.');
//     } else {
//         alert(errorMessage);
//     }
//     console.log(error);
//     // [END_EXCLUDE]
// });
//         // [END createwithemail]



