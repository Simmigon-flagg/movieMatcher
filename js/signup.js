alert("Sign up");
console.log("Signup");
// Initialize Firebase

var config = {
    apiKey: "AIzaSyD_5x9ul3ohecp5fJedYIQfaEpPqsyZ8WI",
    authDomain: "auth-test-f7d87.firebaseapp.com",
    databaseURL: "https://auth-test-f7d87.firebaseio.com",
    projectId: "auth-test-f7d87",
    storageBucket: "auth-test-f7d87.appspot.com",
    messagingSenderId: "1059612843083"
};
firebase.initializeApp(config);

//Getting the Email/Password and Signin button from the the inputs above.
let signIn = document.getElementById('login');

//Listening on thesignIn button click.
signIn.addEventListener('click', (ev) => {
    let email = document.getElementById('exampleInputEmail3').value;
    let password = document.getElementById('exampleInputPassword3').value;
    ev.preventDefault();
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);

        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
    });
});
