import * as mongoose from 'mongoose';

export interface ITaskModel extends app.i.ITask, mongoose.Document {}

let taskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  datePosted: {type: Number},
  dateDue: {type: Number},
  color: {type: String, default: 'lightblue'},

  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  notes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Note'}]
})

export let Task = mongoose.model<ITaskModel>('Task', taskSchema);
