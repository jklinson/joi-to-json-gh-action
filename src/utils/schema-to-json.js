const parse = require('joi-to-json');
const fs = require('fs');
const UserSchema = require('../schema/user');

const dataToWrite = JSON.stringify(parse(UserSchema), null, 2);

fs.writeFile('./resources/user.json', dataToWrite, 'utf8', (err) => {

    if (err) {
        console.log(`Error writing file: ${err}`);
    } else {
        console.log(`File is written successfully!`);
    }

});