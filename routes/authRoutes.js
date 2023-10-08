const passport = require('passport');
const express = require('express');
const router = express.Router();

router.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] })
);
router.get('/google/callback', passport.authenticate('google'));
router.get('/user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
