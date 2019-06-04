var users = []

function createUser(){
    if (document.getElementById("firstname").value !="" || document.getElementById("lastname").value) !="" || document.getElementById("username").value !="" || document.getElementById("email").value != "" || document.getElementById("password").value !="" || document.getElementById("phonenumber").value !=""{
    
    var firstname = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;    
    var password = document.getElementById("password").value;
    var phonenumber = document.getElementById("phonenumber").value;
        
    users.push({
    firstname: firstname,
    lastname: lastname,
    username: username,
    email: email,
    password: password,
    phonenumber: phonenumber

});
        console.log(users[0])
   
    }else{alert("Registration failed, please try again.")};

};


