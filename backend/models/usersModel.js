const mongoose = require('mongoose');

let taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true
},
  keeper: {
    type: String,
    required: true
},
status: {
  type: Boolean,
  required: true
}
});

let schema = mongoose.Schema({
  login: {
    type: String,
    required: true,
    index: true,
    unique: true
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
    type: Number,
    default: 0

},
  contents: {
    type: [String],

},
  userType: {
    type: String,
    default: "user",
    enum: ["user"]
},
  userPartner: {
    type: String,
    index: true,
    unique: true
}
});


const usersModel = mongoose.model('users', schema);

module.exports = usersModel;
