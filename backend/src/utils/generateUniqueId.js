const crypto = require('crypto'); //Importando pacote de criptografia do node.

module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString('HEX')
}
