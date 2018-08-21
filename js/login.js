console.log("login.js");
let signIn = document.getElementById('signin');
//Listening on thesignIn button click.
signIn.addEventListener('click', (e) => {
    let email = document.getElementById('inputEmail').value;
    let password = document.getElementById('inputPassword').value;
    e.preventDefault();
    if (email === "admin@admin.com" && password === "admin") {
        window.location.href = 'sites/home.html';
    }

});
