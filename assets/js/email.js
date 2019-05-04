$(window).ready(()=>{
    $("#loader").hide();

    $("#check-btn").click(()=>{
        $("#output").hide();

        let input = $("#input").val();

        if(!input){
            $("#input").addClass("is-danger");
            return;
        }
        $("#input").removeClass("is-danger");

        $("#loader").show();
        
        $.get("/api/email-checker?email="+input, data=>{
            if(data){
                $("#output").html("Exist");
            }
            else{
                $("#output").text("Not exist");
            }
            $("#loader").hide();
            $("#output").show();
        })
    })

   
})