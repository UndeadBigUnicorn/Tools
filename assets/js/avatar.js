$(window).ready(()=>{

    $("#confirm-btn").click(()=>{
        let name = $("#name").val();
        $.get(`http://avatar-generator-tool.herokuapp.com/${name}`, data=> {
            $("#image").html(data);
          });
    })
})