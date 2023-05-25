var attempt = 3;

function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if(username == "ola" && password == "ola"){
        alert("Welcome back " + username + ", it been a While");
        window.location = "success.html"
        return false;
    } 
    else {
        attempt--;
        alert("You have just " + attempt + " attmept left of 3");
        window.location = "index.html"

        if(attempt == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
        }
    }
}