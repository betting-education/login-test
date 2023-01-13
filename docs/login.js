$(function () {
    $("#bt-sign-in").on("click", function() {
        var username = $("#field-user").val();
        var password = $("#field-password").val();
        
        $("#message > span").remove()
        
        if (username === "user@email.com" && password === "password") {
            window.location.assign("done.html");
        } else if (username === "" && password === "") {
            $("<span id=\"empty-field-msg\" class=\"error\"><p>Please, provide username and password!</p></span>").appendTo("#message");
        } else {
            $("<span id=\"error-msg\" class=\"error\"><p>Invalid username and/or password!</p></span>").appendTo("#message");
        }
    });
});
