$(window).ready(()=>{

    $("#confirm-btn").click(()=>{
        let name = $("#name").val();
        $("#temp").hide();
        $("#image").attr("src",`http://avatar-generator-tool.herokuapp.com/${name}`);
        $("#temp-container").append(`
        <div class="control">
        <a href="http://avatar-generator-tool.herokuapp.com/download/${name}" class="button is-info">Download</a>
        </div>`);
    })

   
})