const CONFIG = {};

//Port, where our app will be running
CONFIG.PORT = process.env.PORT || 5050;

//Mail config


//Tools config
CONFIG.tools = [
    {code: "json-beautifier", name: "JSON Beautifier", view: "jsonBeautifier", description: "format your JSON to readeble view.",
        fields: [
            {field:"json", type: "String", description: "json to be modifyid"}
        ]
    },
    {code: "avatar-generator", name: "Avatar picture generator", view: "avatarGenerator", description: "simply generate picture from string.",
        fields: [
            {field:"name", type: "String", description: "name to generade the avatar picture."}
        ]
    },
    {code: "name-generator", name: "Name generator", view: "nameGenerator", description: "generate random name.",
        fields: [
        ]
    },
    {code: "sha256-encryptor", name: "SHA256 encryptor", view: "sha256Encryptor", description: "encrypt string using SHA256.",
        fields: [
            {field: "str", type: "String", description: "string to be ectrypted"}
        ]    
    },
    {code: "md5-encryptor", name: "MD5 encryptor", view: "md5Encryptor", description: "encrypt string using MD5.",
    fields: [
        {field: "str", type: "String", description: "string to be ectrypted"}
    ]    
}
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
