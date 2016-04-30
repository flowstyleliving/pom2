import * as mongoose from 'mongoose';

export interface INoteModel extends app.i.INote, mongoose.Document {}

let noteSchema = new mongoose.Schema({
  title: {type: String, required: true},

  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  task: {type: mongoose.Schema.Types.ObjectId, ref: 'Task'}
})

export let Note = mongoose.model<INoteModel>('Note', noteSchema)
