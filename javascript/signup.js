// Demo users which were randomly generated, plus ourselfs
var users = [
    {
        firstname: "Carolyn",
        lastname: "Johnsen",
        username: "carojohns",
        email: "carolyn95@outlook.com",
        password: "supersecret123"
    },

    {
        firstname: "Grace",
        lastname: "Palmer",
        username: "palmface",
        email: "grace.face@gmail.com",
        password: "little87Max"
    },

    {
        firstname: "Benjamin",
        lastname: "Bannerman",
        username: "benniboi",
        email: "bennisniper2000@yahoo.com",
        password: "benniiscool"
    },
    
    {
        firstname: "Kevin",
        lastname: "Brenden",
        username: "98rootdev",
        email: "kevin@mail.com",
        password: "passord"
    },
    
    {
        firstname: "Bernt Johan",
        lastname: "Aspehaug",
        username: "berntolini",
        email: "bernt@yahoo.com",
        password: "1234"
    }
];

/* Function for creating a user, which later can be used to login in to Kanban 2.0 with. */

function createUser() {
    
    // Checking if there are input in all fields.
    if (document.getElementById("firstname").value != ""
        || document.getElementById("lastname").value != ""
        || document.getElementById("username").value != ""
        || document.getElementById("email").value != ""
        || document.getElementById("password").value != ""
    ) {

        // Declaring the variables for further use
        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        // Takes the whole form as one variable
        var userInfoDict = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        };
        //Pushes the input to our array declared earlier
        users.push(userInfoDict);
        //Redirects us to the login page for easier access.
        window.location.replace("../pages/login.html");

    } else {
        // If some fields are empty this is the response
        alert("Registration failed, please try again.")
    }
}


