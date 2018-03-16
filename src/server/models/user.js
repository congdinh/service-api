const mongoose = require('mongoose');
const Promise = require('bluebird');

const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true
  },
  name: String,
  status: { type: String, default: true },
  avatar: String,
  language: String,
  country: String,
  api_version: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { collection: 'user' });

UserSchema.pre('save', (next) => {
  now = new Date();
  this.updatedAt = now;
  if (!this.createdAt) {
    this.createdAt = now;
  }
  next();
});

UserSchema.statics.findAll = async (ids, callback) => {
  const query = await this.find({ status: true });
  if (!ids) {
    query.exec(callback);
    return query;
  } else {
    query.where('user').in(ids).exec(callback)
  }
  return query;
};

UserSchema.statics.createOrUpdate = (params) => {
  this.findOne({ userId: params.id })
    .then((user) => {
      const temp = {};
      if (!user) {
        temp.userId = params.id;
        temp.name = params.name;
        temp.avatar = params.avatar;
        temp.language = params.language;
        temp.country = params.country;
        temp.api_version = params.api_version;
        return User.create(temp);
      }
      temp.userId = user.userId !== params.id && param.id || user.userId;
      temp.name = user.name !== params.name && param.name || user.name;
      return User.update(temp);
    })
    .catch((error) => {
      console.log.error('Error while create user');
      return Promise.reject(error);
    });
};

const User = mongoose.model('User', UserSchema);