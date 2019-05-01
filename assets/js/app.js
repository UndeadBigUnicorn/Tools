var in_editor = ace.edit("in_editor");
var out_editor = ace.edit("out_editor");
in_editor.session.setMode("ace/mode/javascript");
out_editor.session.setMode("ace/mode/javascript");

in_editor.session.on('change', function(delta) {
	//transformation script
    out_editor.setValue(in_editor.getValue());
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();

    document.body.removeChild(element);
}

$('#load_button').click(function(){
    alert('lol');
});

$('#download_button').click(function(){
    var text = out_editor.getValue();
    var filename = "result.txt";
    download(filename, text);
});