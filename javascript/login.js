/**
 *
 * Checks whether or not the given username and password is valid for some user.
 *
 * @returns
 */
function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // If both username and password is NOT empty:
    if (!(username == "" && password == "")) {

        // Look through array of all users to check if given credentials are valid for any user.
        for (let i = 0; i < window.users.length; i++) {

            let validUsername = window.users[i].username;
            let validPassword = window.users[i].password;

            if (username == validUsername && password == validPassword) {

                // The username and the password is correct.
                window.location.replace("../pages/index.html");
                return true;
            }
        }

        // The username or password is incorrect.
        alert("Wrong username or password, please try again.");
        return false;
    }

    // Fields are empty.
    alert("Fields cannot be empty.");
    return false;
}