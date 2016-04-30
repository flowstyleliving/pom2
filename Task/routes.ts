import * as express from 'express';
import * as jwt from 'express-jwt';
import * as controller from './controller';

const router = express.Router();
const auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//BASE ROUTE: '/api/v1/tasks'

//GET: '/api/v1/tasks'
router.get('/',controller.getAll);

//GET: '/api/v1/tasks/:id'
router.get('/:id',controller.getOne);

//POST: '/api/v1/tasks'
router.post('/',auth,controller.create);

//PUT: '/api/v1/tasks/:id'
router.put('/:id',auth,controller.update);

//DELETE: '/api/v1/tasks/:id'
router.delete('/:id',auth,controller.remove);

export = router;
