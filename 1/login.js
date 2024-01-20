const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);
    if (username == "admin" && password == "admin") {
        window.location.href = "home.html";
    }
    else {
        alert("Username or password is incorrect");
    }
});
