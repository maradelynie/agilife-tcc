const mongoose = require('mongoose');

let schema = mongoose.Schema({
  _id: {
    type: String,
},
  text: {
    type: String,
    required: true
},
  icon: {
    type: String,
    required: true
}
});

const notificationsModel = mongoose.model('notifications', schema);

module.exports = notificationsModel;
