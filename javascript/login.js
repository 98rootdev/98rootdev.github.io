// Function for the login page, which checks if both the username and password is correct.

function login() {
    /* Getting the values from the input typed by the user, and declaring the variables
for them here so we can use them later in the code without typing it in every time */ 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Checks if there is any input at all, if not, it alerts you that some fields can't be empty.
    if (!(username == "" && password == "")) {

        /* Loops through the array containing users to check if given credentials are
            valid for any user.*/
        for (let i = 0; i < window.users.length; i++) {
            
            // We get the info from signup.js file, which contains our data

            let validUsername = window.users[i].username;
            let validPassword = window.users[i].password;

            if (username == validUsername && password == validPassword) {

                // If both the username and password are correct. We will be redirected to the mainpage.
                window.location.replace("../pages/index.html");
                return true;
            }
        }

        // If username or password is incorrect, you will be alerted with this.
        alert("Wrong username or password, please try again.");
        return false;
    }

    // If any of the fields are empty.
    alert("Fields cannot be empty.");
    return false;
}