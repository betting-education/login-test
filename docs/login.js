$(function () {
    
    $("#signIn").on("click", function() {
        var username = $("#user").val();
        var password = $("#password").val();

        if (username === "user@email.com" && password === "password") {
            // If the credentials are valid, show an alert box and reload the page
            alert("You have successfully logged in.");
            location.reload();
        } else {
            // Otherwise, make the login error message show (change its oppacity)
            $("<div id=\"login-error-msg-holder\"><p id=\"login-error-msg\">Invalid username and/or password!</p></div>").appendTo("#message");
        }
    });
});

