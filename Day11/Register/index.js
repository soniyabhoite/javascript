function register(event) {
    event.preventDefault();
    

    
    var email = document.getElementById("email").value
    console.log(email, "- email ")
    var password = document.getElementById("password").value;
    console.log(password, "- password")
    var state = document.getElementById("state").value
    console.log(state, "- state")
    var zip = document.getElementById("zip").value;
    console.log(zip, "- zip")
    var city = document.getElementById("city").value
    console.log(city, "- city")
    var address = document.getElementById("address").value;
    console.log(address, "- address")
    var address2 = document.getElementById("address2").value;
    console.log(address, "- address2")


    if (!email || !password || !state || !zip || !city || !address || !address2) {
        return alert("All fields are is required")
        
    }
    var userData = { email: email, password: password ,address:address,address2:address2,state:state,zip:zip,city:city}
    // console.log("All fields found.")
   

    if(JSON.parse(localStorage.getItem("Users")!=null))
    {
        var users = JSON.parse(localStorage.getItem("Users"))
        console.log(users)
    }
    else
    {
        var users=[]
    }
    users.push(userData)
    // store data into localstorage
    localStorage.setItem("Users", JSON.stringify(users))
    if(document.getElementById('success').style.display==="none")
    {
        document.getElementById('success').style.display="block"
    }
     document.getElementById('success').innerText='Registration Successful'
     document.getElementById("email").value=""
     document.getElementById("password").value=""
     document.getElementById("address").value=""
     document.getElementById("address2").value=""
     document.getElementById("city").value=""
     document.getElementById("zip").value=""
     document.getElementById("state").value=""

     window.location.href = './../Login/index.html'
   

}

function redirect()
    {
        setInterval(window.location.href = "./../Login/index.html",5000)
    }