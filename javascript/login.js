var users = [];


function loginValid(){
    if(document.getElementById("username").value !="" || document.getElementById("password").value !="")
            for(i=0; i < users.length; i++){
    if(users[i].username = document.getElementById("username").value){
        if(users[i].password = document.getElementById("password").value;){
            return true;
            
        }else{
            return false;
            alert("Wrong username or password, please try again.");
        }
           
    }
    
}       