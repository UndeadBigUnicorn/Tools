const amountOfDigets = 6;

/**
 * Generates code with random digets
 */
function generateCode(){

    let code = "";

    for (let i = 0; i < amountOfDigets; i++) {
        code += "" + parseInt(Math.random() * 9);
    }

    return code;

}

module.exports.generateCode = generateCode;