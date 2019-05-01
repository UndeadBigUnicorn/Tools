var in_editor = ace.edit("in_editor");
var out_editor = ace.edit("out_editor");
in_editor.session.setMode("ace/mode/javascript");
out_editor.session.setMode("ace/mode/javascript");

in_editor.session.on('change', function(delta) {
	//transformation script
    out_editor.setValue(in_editor.getValue());
});