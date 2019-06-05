users = [
    {
        firstname: "a",
        lastname: "a",
        username: "a",
        email: "a",
        password: "a"
    },
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
    }
];

function createUser() {
    if (document.getElementById("firstname").value != ""
        || document.getElementById("lastname").value != ""
        || document.getElementById("username").value != ""
        || document.getElementById("email").value != ""
        || document.getElementById("password").value != ""
    ) {

        var firstname = document.getElementById("firstname").value;
        var lastname = document.getElementById("lastname").value;
        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        var userInfoDict = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        };

        users.push(userInfoDict);

        console.log(window.users[0]);

        window.location.replace("../pages/index.html");

    } else {
        alert("Registration failed, please try again.")
    }

    refreshUserDropDown();
}


