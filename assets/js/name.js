$(window).ready(()=>{

    $("#loader").hide();

    $("#generate-btn").click(()=>{
        $("#output").hide();
        $("#loader").show();
        $.get("/api/name-generator", data=>{
            $("#output").text(data);
            $("#loader").hide();
            $("#output").show();
        });

    })

   
})