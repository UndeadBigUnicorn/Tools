$(window).ready(()=>{

    $("#loader").hide();

    $("#generate-btn").click(()=>{
        $("#output").hide();
        $("#loader").show();
        $.get("/api/digets-generator", data=>{
            $("#output").text(data);
            $("#loader").hide();
            $("#output").show();
        });

    })

   
})