// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const todosSchema = new Schema({
//   //_id: Schema.Types.ObjectId,
//   taskName: {
//     type: String,
//     required: true,
//   },
//   // status:{
//   //   type: String,
//     // required: true,
//   // },
//   user: { type: Schema.Types.ObjectId, ref: 'User1' },
// }, {
//   timestamps: true,
// });

// const Todos = mongoose.model('Todos', todosSchema);

// module.exports = Todos;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todosSchema = new Schema({
  //_id: Schema.Types.ObjectId,
  taskName: {
    type: String,
    required: true,
  },
  // status:{
  //   type: String,
    // required: true,
  // },
  user: { type: Schema.Types.ObjectId, ref: 'User1' },
}, {
  timestamps: true,
});

const Todos = mongoose.model('Todos', todosSchema);

module.exports = Todos;