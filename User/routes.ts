import * as express from 'express';
import * as controller from './controller';
const passport = require('passport');

const router = express.Router();

router.post('/login', controller.login);

router.post('/register', controller.register);

router.get('/auth/facebook',passport.authenticate('facebook',{session:false}));

router.get('/auth/facebook/callback',passport.authenticate('facebook',{session:false}),(req,res,next) => {
  res.redirect('/?code=' + req['tempUser'].generateJWT());
});

router.get('/auth/twitter',passport.authenticate('twitter',{session:false}));

router.get('/auth/twitter/callback',passport.authenticate('twitter',{session:false}),(req,res,next) => {
  res.redirect('/?code=' + req['tempUser'].generateJWT());
});

router.get('/auth/google',passport.authenticate('google',{session:false, scope: ['profile','email']}));

router.get('/auth/google/callback',passport.authenticate('google',{session:false}), (req,res,next) => {
  res.redirect('/?code=' + req['tempUser'].generateJWT());
})

export = router;
