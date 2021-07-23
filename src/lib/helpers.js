
const bcrypt = require('bcryptjs');

const helpers = {};

helpers.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);//patron
    const hash = await bcrypt.hash(password, salt);//cifrado
    return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
    try {
        return await bcrypt.compare(password, savedPassword);
    } catch (err) {
        console.log(TextEncoderStream);
    }
};

module.exports = helpers;