import * as mongoose from 'mongoose';
import * as express from 'express';
import {Task, ITaskModel} from './model';
import {Note, INoteModel} from '../Note/model'

export function getAll(req:express.Request, res:express.Response, next:Function){
  Task.find({})
    .populate('user','name')
    .exec((err,movies) => {
      if (err) return next(err);
      res.json(movies);
    });
}

  export function getOne(req:express.Request, res:express.Response, next:Function){
    Task.findOne({_id:req.params.id})
      .populate('user','name')
      .populate('comments','-tasks')
      .exec((err,data) => {
        if (err) return next(err);
        Note.populate(data.notes,{path:'user',select:'name',model:'User'}, (err, response) => {
          if (err) return next(err);
          res.json(data);
        });
      });
  }

  export function create(req:express.Request, res:express.Response, next:Function){
    req.body.user = req['payload']._id;
    req.body.datePosted = Date.now();
    Task.create(req.body, (err, movie:ITaskModel) => {
      if (err) return next(err);
      res.json(movie);
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
    Task.findOneAndRemove({_id:req.params.id, user:req['payload']._id},(err,movie) => {
      if (err) return next(err);
      if (movie) {
          Note.remove({movie:req.params.id}, (err) => {
            if (err) return next(err);
            res.json({message:'This movie entry has been deleted!'});
          });
      } else {
        next({message:'Unable to delete movie entry.', status: 500});
      }
    });
  }
