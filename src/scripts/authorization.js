const crypto = require('crypto');

module.exports = function compare(password, hash) {
    console.log(encodePassword(password));
    console.log(hash);
    return encodePassword(password) === hash;
}

function encodePassword(password) {
    const bufferedPass = new Buffer(password, 'base64').toString();
    const salt = new Buffer('sflprt49fhi2', 'base64').toString();
    return crypto
        .pbkdf2Sync(bufferedPass, salt, 100, 16, 'sha512')
        .toString('hex');
}
