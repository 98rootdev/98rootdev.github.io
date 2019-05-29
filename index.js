   <script type="text/javascript">
        var username = ["nousername"];
        var password = ["mypassword"];
    </script>
    
    function login() {
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if(user == "lab18" && pass == "lab18") {
    alert("Success.");
    locate="/index.html"
    return false;
} else {
    alert("Wrong username or password, please try again.");
    return false;
    }
}

document.querySelector("#loginForm").addEventListener("click", function(e){
	e.preventDefault();
	login();
});