$(window).ready(()=>{
    $("#notification-api").hide();

    $("#email").change(()=>{
        let email = $("#email").val();
        if(email == ""){
            $("#email-err").text("Email is required!");
            $("#email").addClass("is-danger");
        }
        else if(!validateEmail(email)){
            $("#email-err").text("Email is not correct!");
            $("#email").addClass("is-danger");
        }
        else{
            $("#email-err").text("");
            $("#email").removeClass("is-danger");
        }

    })

    $("#password").change(()=>{
        let password = $("#password").val();
        if(password == ""){
            $("#password-err").text("Password is required!");
            $("#password").addClass("is-danger");
        }
        else if(password.length < 6){
            $("#password-err").text("Password is too short!");
            $("#password").addClass("is-danger");
        }
        else{
            $("#password-err").text("");
            $("#password").removeClass("is-danger");
        }

    })

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $("#login-btn").click(()=>{
        let ok = true;
        let password = $("#password").val();
        let email = $("#email").val();
        if(!password || !email){
            ok = false;
        }

        if(!ok){
            if(email == ""){
                $("#email-err").text("Email is required!");
                $("#email").addClass("is-danger");
            }
            else if(!validateEmail(email)){
                $("#email-err").text("Email is not correct!");
                $("#email").addClass("is-danger");
            }
            else{
                $("#email-err").text("");
                $("#email").removeClass("is-danger");
            }

            if(password == ""){
                $("#password-err").text("Password is required!");
                $("#password").addClass("is-danger");
            }
            else if(password.length < 6){
                $("#password-err").text("Password is too short!");
                $("#password").addClass("is-danger");
            }
            else{
                $("#password-err").text("");
                $("#password").removeClass("is-danger");
            }
            return;
        }
        else{
            $.post({
                url: "/login",
                data: {
                    email: email,
                    password: password
                },
                success: data=>{
                    //Success
                    $("#notification-api").hide();
                    window.location.href = "/";
                },
                error: err=>{
                    $("#notification-api").show();
                }
            })
        }
    })

})