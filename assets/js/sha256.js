$(window).ready(()=>{

    $("#convert-btn").click(()=>{

        let input = $("#input").val();
        
        $.get("/api/sha256?str="+input, data=>{
            $("#output").val(data);
        })
    })

   
})