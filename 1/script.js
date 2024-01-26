var loggedIn = false;

document2 = "home.html";

const logged = (username) => {
    console.log("logged");
    localStorage.setItem("loggedIn", loggedIn);
    localStorage.setItem("username", username);
};

const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        loggedIn = true;
        window.location.href = "home.html";
        logged(username);
    } else if (
        username == JSON.parse(localStorage.getItem("Users"))[0] &&
        password == JSON.parse(localStorage.getItem("Users"))[1]
    ) {
        loggedIn = true;
        window.location.href = "home.html";
    } else {
        loggedIn = false;
        alert("Username or password is incorrect");
    }
};

const register = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password == confirmPassword) {
        loggedIn = true;
        window.location.href = "home.html";
    } else {
        alert("Password and confirm password is not match");
        loggedIn = false;
    }
    localStorage.setItem("Users", JSON.stringify([username, password]));
};

const logout = () => {
    console.log("logout");
    loggedIn = false;
    localStorage.setItem("loggedIn", loggedIn);
};
