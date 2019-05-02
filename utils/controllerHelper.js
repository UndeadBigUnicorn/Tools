const path = require("path");
/**
 * Redirect to 404 page
 * @dirPath - string, path to views/static
 */
module.exports._404 = function(req,res){
    return res.redirect("/404");
}