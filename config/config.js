const CONFIG = {};

//Port, where our app will be running
CONFIG.PORT = process.env.PORT || 3000;

//Mail config


//Tools config
CONFIG.tools = [
    {code: "avatar-generator", name: "Avatar picture generator", view: "avatarGenerator", description: "simply generate picture from string"},
    {code: "name-generator", name: "Name generator", view: "nameGenerator", description: "generate random name"},
    {code: "json-beautifier", name: "JSON Beautifier", view: "jsonBeautifier", description: "format your JSON to readeble view"}
]

/**
 * Get tool be tool code
 * @code - string, tool code
 */
CONFIG.getTool = function(code){
    for(let i = 0; i<CONFIG.tools.length; i++){
        if(CONFIG.tools[i].code == code){
            return CONFIG.tools[i];
        }
    }
    return null;
}
//Export our config
module.exports = CONFIG;
