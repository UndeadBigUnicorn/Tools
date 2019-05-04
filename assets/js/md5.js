$(window).ready(()=>{

    $("#convert-btn").click(()=>{

        let input = $("#input").val();
        
        $.get("/api/md5-encryptor?str="+input, data=>{
            $("#output").val(data);
        })
    })

   
})