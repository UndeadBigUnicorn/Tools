$(window).ready(()=>{

    $("#convert-btn").click(()=>{

        let input = $("#input").val();
        
        $.get("/api/sha256-encryptor?str="+input, data=>{
            $("#output").val(data);
        })
    })

   
})