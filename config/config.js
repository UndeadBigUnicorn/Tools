const CONFIG = {};

//Port, where our app will be running
CONFIG.PORT = process.env.PORT || 3000;

//Mail config


//Tools config
CONFIG.tools = [
    {code: "avatar-generator", label: "Avatar picture generating tool", view: "avatarGenerator"},
    {code: "name-generator", label: "Name generating tool", view: "nameGenerator"}
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
