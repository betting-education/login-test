$(function () {
    
    $("#signIn").on("click", function() {
        var username = $("#user").val();
        var password = $("#password").val();
        
        $("#message > span").remove()
        
        if (username === "user@email.com" && password === "password") {
            window.location.assign("done.html");
        } else if (username === "" && password === "") {
            $("<span id=\"empty_field_msg\"><p>Please, provide username and password!</p></span>").appendTo("#message");
        } else {
            $("<span id=\"error_msg\"><p>Invalid username and/or password!</p></span>").appendTo("#message");
        }
    });
});

