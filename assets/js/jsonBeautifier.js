$(function () {
    // var in_editor = ace.edit("in_editor");
    // var out_editor = ace.edit("out_editor");
    // in_editor.session.setMode("ace/mode/javascript");
    // out_editor.session.setMode("ace/mode/javascript");

    $("#beautify-btn").click(()=>{
        let left_editor = document.getElementById("in_editor");
        let right_editor = document.getElementById("out_editor");
        let data = JSON.parse(left_editor.value);     
        console.log(JSON.stringify(data, null, "\t"));
        right_editor.innerHTML = "";
        right_editor.innerHTML = JSON.stringify(data, null, 4);
    })
});