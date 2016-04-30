import * as express from 'express';
import * as jwt from 'express-jwt';
import * as controller from './controller';

const router = express.Router();
const auth = jwt({
  userProperty: 'payload',
  secret: process.env.JWT_SECRET
});

//BASE ROUTE: '/api/v1/notes'

//POST: '/api/v1/notes'
router.post('/', controller.create);

//UPDATE: '/api/v1/notes'
router.put('/:id', controller.update);

//DELETE: '/api/v1/notes/:id'
router.delete('/:id', controller.remove);

export = router;
