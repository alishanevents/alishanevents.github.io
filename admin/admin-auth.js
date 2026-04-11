let user =
    JSON.parse(
        localStorage.getItem("currentUser")
    );

if (!user) {

    window.location.href =
        "../login.html";

}

if (user.role !== "admin") {

    alert("Admin Access Only");

    window.location.href =
        "../booking.html";

}