$(function () {
    in_editor.session.on('change', function(delta) {
        try {

            text = JSON.stringify(JSON.parse(in_editor.getValue()), null ,4);
          
        } catch (err) {
        
            text = 'undefined JSON format';       
        }

        out_editor.session.setValue(text);
    });
});