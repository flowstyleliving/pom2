import * as mongoose from 'mongoose';
import * as express from 'express';
import {Note, INoteModel} from './model';
import {Task, ITaskModel} from '../Task/model'


  export function getOne(req:express.Request, res:express.Response, next:Function){
    Note.findOne({_id:req.params.id})
      .exec((err,data) => {
        if (err) return next(err);
          res.json(data);
        });
  }

  export function create(req:express.Request, res:express.Response, next:Function){
    req.body.user = req['payload']._id;
    Note.create(req.body, (err, note) => {
      if (err) return next(err);
      Task.update({ _id: note.task }, { $push: { 'notes': note._id } }, (err, result) => {
        if(err) return next(err);
      res.json(note);
    });
  });
}

  export function update(req:express.Request, res:express.Response, next:Function){
    Task.update({_id:req.params.id, user:req['payload']._id},req.body,(err,numRows:any) => {
      if (err) return next(err);
      if (numRows === 0) return next({message:'Unable to update movie entry!', status: 500});
      res.json({message:'This movie entry has been updated!'});
    })
  }

  export function remove(req:express.Request, res:express.Response, next:Function){
     Note.remove({_id:req.params.id},(err) => {
       if (err) return next(err);
       // if a note was found and deleted... update the task
       if (Note) {
         Task.update({ notes: req.params.id }, { $pull: { notes: req.params.id } }, (err, numRows) => {
           if (err) return next(err);
           res.json({ message: "Your note has been deleted!" });
         });
       // ... otherwise send an error message
       } else {
         next({ message: 'Could not delete the requested note.', status: 500 });
       }
     });
   }
