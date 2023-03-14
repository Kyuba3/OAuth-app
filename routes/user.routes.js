const express = require('express');
const router = express.Router();

const logingValidate = (req, res, next) => {
  if(!req.isAuthenticated()){
    return res.redirect('/user/no-permission');
  } else {
    next();
  }
};

router.get('/logged', logingValidate, (req, res) => {
  res.render('logged', {
    userName: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', logingValidate, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', logingValidate, (req, res) => {
  res.render('profileSettings');
});


module.exports = router;