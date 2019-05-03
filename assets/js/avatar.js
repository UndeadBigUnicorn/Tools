$(window).ready(()=>{

    $("#loader").hide();

    $("#confirm-btn").click(()=>{
        let name = $("#name").val();
        $("#temp").hide();

        $("#loader").show();
        $("#image").attr("src", "");
        getBase64FromImageUrl(`http://avatar-generator-tool.herokuapp.com/${name}`);
    })

    function getBase64FromImageUrl(url) {
        var img = new Image();

        img.setAttribute('crossOrigin', 'anonymous');

        img.onload = function () {
            $("#loader").hide();
            var canvas = document.createElement("canvas");
            canvas.width =this.width;
            canvas.height =this.height;

            var ctx = canvas.getContext("2d");
            ctx.drawImage(this, 0, 0);

            var dataURL = canvas.toDataURL("image/png");

            let data =  dataURL.replace(/^data:image\/(png|jpg);base64,/, "");

            $("#image").attr("src", 'data:image/jpeg;base64,' + data);

            data = 'data:image/jpeg;base64,' + data;
            if($("#download-btn").length == 0){
                $("#temp-container").append(`
                <div class="control">
                <button id="download-btn" onclick="download(); return false;" data-src="${data}" class="button is-info">Download</button>
                </div>`);
            }
            else {
                $("#download-btn").attr("data-src", data);
            }
        };

        img.src = url;
}

   
})