const axios = require('axios');

/**
 * Check if facebook profile exist
 * @param facebookLink - facebook account name or url to it 
 * @returns {boolean}
 */
async function checkFacebook(facebookLink, callback){
    
    let link = facebookLink;

    if(link.match(/(https)/g)){
        link = link.slice(8,link.length);
    }

    let arrayLength = link.split("/").length;
    var result = "";
    var facebookName = "";

    if(arrayLength==1){
        facebookName = facebookLink;
        result = [facebookName];     
    }

    else if(arrayLength>=2 && arrayLength<=3){
        if(!link.match(/(facebook.com)/g)){
            return callback(false);
        }
        result = link.match(/[https://www.facebook.com//]\/(\w+\/+)|(\w+\d+)/g);    //https://www.facebook.co[m/ChesapeakeEyeCare/]
    }

    else{
        result = link.match(/(\/pg\/(\w+))/g);  //(/pg/(\w+))  = https://www.facebook.com[/pg/ChesapeakeEyeCare/]reviews/?ref=page_internal        
    }

    if(!result){
        return callback(false);          
    }
    else{
        let array = result[0].split("/");
        facebookName = facebookName == "" ? array[0] == "m" ? array[1] : array[2] : facebookName;
        var temp = "";

        let res = await getData(`https://www.facebook.com/${facebookName}/`, callback).catch(err=>{ 
            temp = "bad";
            return callback(false);
        });

        if(res.statusCode == 404){
            temp = "bad";
            return callback(false);
        }
        else{
            if(temp != "bad"){
                return callback(true);
            }
        }
    }

} 

function getData(url, callback) {
    return axios.get(url);
}

module.exports.checkFacebook = checkFacebook;