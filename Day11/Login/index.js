function login(event) {
    event.preventDefault();



    var email = document.getElementById("email").value
    console.log(email, "- email ")
    var password = document.getElementById("password").value;
    console.log(password, "- password")

    if (!email || !password) {
        return alert("All fields are is required")
    }
    var userData = { email: email, password: password }
    // console.log("All fields found.")
    var users = JSON.parse(localStorage.getItem("Users"))
    for (var i = 0; i < users.length; i++) {
        console.log("for")
        if (users[i].email == email && users[i].password == password) {
            document.getElementById("email").value = "";
            document.getElementById("password").value = "";
            if (document.getElementById('success').style.display === "none") {
                document.getElementById('success').style.display = "block"
            }
            document.getElementById('success').innerText = 'Login Successful'
            
        }
    }


    // store data into localstorage
    // localStorage.setItem("Users", JSON.stringify(userData))


    // alert("Login Successful.")

}
function redirect()
    {
        setInterval(window.location.href = "./../index.html",5000)
    }
