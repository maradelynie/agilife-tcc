const mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
},
  keeper: {
    type: String,
    required: true
}
});

let schema = mongoose.Schema({
  login: {
    type: String,
    required: true
},
  password: {
    type: String,
    required: true
},
  name: {
    type: String,
    required: true
},
  tasks: {
    type: [taskSchema] 
},
  points: {
    type: Number
},
  contents: {
    type: [String],

},
  userType: {
    type: String,
    default: "user",
    enum: ["user"]
},
  userNotification: {
    type: [String]
}
});


const usersModel = mongoose.model('users', schema);

module.exports = usersModel;
