const crypto = require('crypto-js/sh1')
const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
  name: {type: String, required: true, unique: true},
  password: {
    type: String,
    set: function(password) {

      console.log('Set user schema passowrd:')

      this._password = password
      this.salt = this.makeSalt()
      this.hashed_password = this.encryptPassword(password)
      return this.hashed_password
    },
  },

})

userSchema.methods.encryptPassword = function (password) {
  return crypto(password, this.salt).toString()
}

userSchema.methods.authenticate = function (plainText) {
  console.log(
    'Authenticate ---->',
    plainText, this.encryptPassword(plainText),
    this.password
  )
  return this.encryptPassword(plainText) === this.password
}

userSchema.methods.makeSalt = function() {
  return `${Math.round((new Date().valueOf() * Math.random()))}`
}

module.exports = userSchema
