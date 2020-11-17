const mongoose = require('mongoose');


let schema = mongoose.Schema({

  title: {
    type: String,
    required: true
},
  type: {
    type: String,
    required: true
},
img: {
  type: String,
  required: true
},
link: {
  type: String,
  required: true
},
value: {
  type: Number,
  required: true
},
ownerId: {
  type: String,
  required: true
}
});


const contentsSchema = mongoose.model('contents', schema);

module.exports = contentsSchema;
