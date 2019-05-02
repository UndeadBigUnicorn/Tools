const path = require("path");
/**
 * Return static page on 404 Error
 * @dirPath - string, path to views/static
 */
module.exports._404 = function(req,res, dirPath){
    return res.sendFile(path.join(dirPath,"404.html"));
}