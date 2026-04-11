// Default Admin (hardcoded)

if (!localStorage.getItem("users")) {

    let users = [

        {
            name: "Admin",
            email: "admin@alishan.com",
            password: "admin123",
            role: "admin"
        }

    ];

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}



// SIGNUP SYSTEM

let signupForm =
    document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            let name =
                document.getElementById("name").value;

            let email =
                document.getElementById("email").value;

            let password =
                document.getElementById("password").value;



            // Email Validation

            let emailPattern =
                /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

            if (!email.match(emailPattern)) {

                alert("Invalid Email");

                return;

            }



            // Password Validation

            if (password.length < 6) {

                alert("Password must be 6+ characters");

                return;

            }



            let users =
                JSON.parse(
                    localStorage.getItem("users")
                );



            // Check duplicate email

            let exists =
                users.find(
                    user => user.email === email
                );

            if (exists) {

                alert("Email already exists");

                return;

            }



            users.push({

                name: name,
                email: email,
                password: password,
                role: "user"

            });

            localStorage.setItem(
                "users",
                JSON.stringify(users)
            );

            alert("Signup Successful");

            window.location.href =
                "login.html";

        });

}



// LOGIN SYSTEM

let loginForm =
    document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (e) {

            e.preventDefault();

            let email =
                document.getElementById("email").value;

            let password =
                document.getElementById("password").value;

            let users =
                JSON.parse(
                    localStorage.getItem("users")
                );

            let user =
                users.find(

                    u =>
                        u.email === email &&
                        u.password === password

                );



            if (user) {

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(user)
                );



                // Role Redirect

                if (user.role === "admin") {

                    window.location.href =
                        "admin/index.html";

                }
                else {

                    window.location.href =
                        "booking.html";

                }

            }
            else {

                alert("Invalid Login");

            }

        });

}



// CONTINUE AS GUEST

function continueGuest() {

    localStorage.setItem(
        "currentUser",
        JSON.stringify({

            name: "Guest",
            role: "guest"

        })
    );

    window.location.href =
        "booking.html";

}