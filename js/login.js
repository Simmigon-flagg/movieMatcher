firebase.initializeApp(config);

//Getting the Email/Password and Signin button from the the inputs above.
let signIn = document.getElementById('signin');

//Listening on thesignIn button click.
signIn.addEventListener('click', (ev) => {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    ev.preventDefault();
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {

        var errorCode = error.code;
        console.log(errorCode);

        var errorMessage = error.message;
        alert(errorMessage);

        // ...
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            //Handling the successful authentication.
             window.location.href = 'sites/home.html';

            //var user = firebase.auth().currentUser;

            var uid;
            if (user != null) {
                uid = user.uid; //"4JI6ykq78gPfZ5vLRLmMGvMWv632";

                console.log(uid);
                // The user's ID, unique to the Firebase project. Do NOT use
                // this value to authenticate with your backend server, if
                // you have one. Use User.getToken() instead.
            }
            //console.log(name,email,photoUrl,emailVerified,uid);
            var date = new Date();
            var stringDate = date.toString();
            firebase.database().ref(`/users/${uid}`).push({
                newdata: "Do I get new new awesome",
                date: stringDate
            });
            console.log(new Date());
        }).catch(function (error) {
            //Handling the error showcasing. });
            alert('Wrong Password. try again')
        }, false);
});