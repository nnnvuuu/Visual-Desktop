//write by zhixin chen

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  taskName:[{ type: Schema.Types.ObjectId, ref: 'Todos' }],
  // status:[{ type: Schema.Types.ObjectId, ref: 'Todos' }],
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength:10
  },
  password: { 
    type: String, 
    required: true,
    minlength: 6,
  },
  email:{
    type: String,
    required: true,
  }

}, {
  timestamps: true,
});

const User1 = mongoose.model('User1', userSchema);

module.exports = User1;