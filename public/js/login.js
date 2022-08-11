const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

//login form 
const loginFormHandle = async (event) => {
    event.preventDefault();

    const username = document.getElementById("username-login").value.trim();
    const password = document.getElementById("password-login").value.trim();

    //checking inputs
    if(!username || !password) {
        alert("Please enter username/password");
        return;
    }

    //validating length of password
    if(password.length <8) {
        alert("Password must be at least 8 characters");
        return;
    }

    const response = await fetch("/api/login", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-Type": "application/json"}
    });

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText)
    }
}

//sign up form 
const signupFormHandle = async (event) => {
    event.preventDefault();

    const username = document.getElementById("username-signup").value.trim();
    const password = document.getElementById("password-signup").value.trim();

    if(!username || !password) {
        alert("Please enter both a username and password");
        return;
    }

    if(password.length <8) {
        alert("Password must be at least 8 characters");
        return;
    }

    const response = await fetch("/api/create", {
        method: "POST",
        body: JSON.stringify({username, password}),
        headers: {"Content-Type": "application/json"}
    });

    if(response.ok) {
        document.location.replace("/dashboard");
    } else {
        alert(response.statusText)
    }
}

loginForm.addEventListener("submit", loginFormHandle);

signupForm.addEventListener("submit", signupFormHandle);