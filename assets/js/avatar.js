$(window).ready(()=>{

    $("#confirm-btn").click(()=>{
        let name = $("#name").val();
        $("#temp").hide();
        $("#image").attr("src",`http://avatar-generator-tool.herokuapp.com/${name}`);
        if($("#download-btn").length == 0){
            $("#temp-container").append(`
            <div class="control">
            <a id="download-btn" href="http://avatar-generator-tool.herokuapp.com/download/${name}" class="button is-info">Download</a>
            </div>`);
        }
        else {
            $("#download-btn").attr("href", `http://avatar-generator-tool.herokuapp.com/download/${name}`);
        }
    })

   
})