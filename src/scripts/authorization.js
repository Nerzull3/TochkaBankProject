const crypto = require('crypto');

module.exports = class Authorization {
    encodePassword(password) {
        const bufferedPass = new Buffer(password, 'base64').toString();
        const salt = new Buffer('sflprt49fhi2', 'base64').toString();
        return crypto
            .pbkdf2Sync(bufferedPass, salt, 100, 16, 'sha512')
            .toString('hex');
    }

    static compare(password, hash) {
        console.log(this.encodePassword(password));
        return this.encodePassword(password) === hash;
    }
}
