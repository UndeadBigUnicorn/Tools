$(window).ready(()=>{

    $("#convert-btn").click(()=>{

        let input = $("#input").val();
        
        $.get("/api/md5?str="+input, data=>{
            $("#output").val(data);
        })
    })

   
})