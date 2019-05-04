$(window).ready(()=>{
    $("#loader").hide();

    $("#check-btn").click(()=>{
        $("#output").hide();
        $("#loader").show();
        let input = $("#input").val();
        
        $.get("/api/facebook-checker?url="+input, data=>{
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