console.log("Signup");
// Initialize Firebase

var config = {
    apiKey: "AIzaSyA4DnsmunTp-DWFIjWJ0NvZfSxIojCXUIU",
    authDomain: "moviematcher-2909e.firebaseapp.com",
    databaseURL: "https://moviematcher-2909e.firebaseio.com",
    projectId: "moviematcher-2909e",
    storageBucket: "moviematcher-2909e.appspot.com",
    messagingSenderId: "411775304326"
};
firebase.initializeApp(config);

//Getting the Email/Password and Signin button from the the inputs above.
let signup = document.getElementById('sign-up-validate');

//Listening on thesignIn button click.
signup.addEventListener('click', (ev) => {
   
    let email = document.getElementById('signupemail').value;
     alert(email);
    console.log(signup);
    let password = document.getElementById('passsword1').value;
    console.log(signup);
    ev.preventDefault();

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        // console.log(email, password);
        var errorCode = error.code;
        console.log(errorCode);

        var errorMessage = error.message;
        console.log(errorMessage);

        // ...
    });
    if (true) {

        window.location.href = 'home.html';

    }
});

console.log("End");