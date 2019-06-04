var users = []

function createUser(){
    if(document.value != ""){
    var firstname = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value
        
    users.push({
    firstname: firstname,
    lastname: lastname,
    username: username,
    password: password,
    phonenumber: phonenumber
});
   
    }else{alert("Registration failed, please try again.")};

};