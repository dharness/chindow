const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const bcrypt = require('bcrypt-nodejs');


const Schema = mongoose.Schema;

const accountSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  slack: {
    accessToken: String,
    team: {
      name: String,
      id: String
    },
    channel: {
      name: String,
      id: String
    },
    imgUrl: String
  }
}, {
  versionKey: false
});

accountSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

accountSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

accountSchema.method('toClient', function() {
  let obj = this.toObject();

  obj.id = obj._id;
  delete obj._id;
  delete obj.password;

  return obj;
});

accountSchema.plugin(timestamps);

const Account = mongoose.model('Account', accountSchema);
module.exports = Account;
