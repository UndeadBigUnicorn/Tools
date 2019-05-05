const fs = require("fs");
const readline = require("readline");
const path = require("path");

const database = require("../database/database");

/**
 * Import animals list into database
 */
function createAnimalsList(){

    let lineReader = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname,'/data/animals.txt'))
    });
    
    lineReader.on('line', function (line) {
        database.addAnimal(line);
    });
}

/**
 * Import adjectives list into database
 */
function createAdjectivesList(){

    let lineReader = readline.createInterface({
        input: fs.createReadStream(path.join(__dirname,'/data/adjectives.txt'))
    });
    
    lineReader.on('line', function (line) {
        database.addAdjective(line);
    });
}

/**
 * @returns {string} generated name
 */
async function getName(){
    let adjective = await database.selectRandomAdjective();
    let animal = await database.selectRandomAnimal();
    return adjective + " " + animal;
}

module.exports = {
    createAdjectivesList,
    createAnimalsList,
    getName
};
