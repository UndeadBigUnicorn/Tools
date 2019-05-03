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

    //TODO: change image drawing method to this binary one
    getBase64FromImageUrl("http://avatar-generator-tool.herokuapp.com/s");

    function getBase64FromImageUrl(url) {
    var img = new Image();

    img.setAttribute('crossOrigin', 'anonymous');

    var data = "";

    img.onload = function () {
        var canvas = document.createElement("canvas");
        canvas.width =this.width;
        canvas.height =this.height;

        var ctx = canvas.getContext("2d");
        ctx.drawImage(this, 0, 0);

        var dataURL = canvas.toDataURL("image/png");

        data =  dataURL.replace(/^data:image\/(png|jpg);base64,/, "")
        var img = document.createElement("img");
        img.src = 'data:image/jpeg;base64,' + data;
        document.body.appendChild(img);
        //alert(dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));
    };

    img.src = url;
}

   
})