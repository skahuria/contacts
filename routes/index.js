var express = require('express');
var router = express.Router();
var Content = require('../models/content');
var Audit = require('../models/audit');
var Risk = require('../models/risk');
var Customer = require('../models/customer');
var Actuat = require('../models/actuat');
var Market = require('../models/market');
var Admin = require('../models/admin');
var Administration = require('../models/administration');
var Ict = require('../models/ict')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PACIS Internal Contacts' });
});

/* GET Userlist page. */
router.get('/westlands', function(req, res, next) {
    Audit.find(function(err, audit){
    Content.find(function(err, content){
      Risk.find(function(err, risk){
        Customer.find(function(err, customer){
          Market.find(function(err, market){
            Actuat.find(function(err, actuat){
              Admin.find(function(err, admin){
                Administration.find(function(err, administration){
                  Ict.find(function(err, ict){
      res.render('westlands', { title: 'Westlands Branch', audits: audit, contents: content, risks: risk, customers: customer, markets: market, actuats: actuat, admins: admin,
    administrations: administration, icts: ict});
                   });
                 });
               });
             });
           });
         });
       });
     });
    });
  });

    

router.get('/town', function(req, res, next) {
    res.render('town', { title: 'Town Branch'});  
});


router.get('/nakuru', function(req, res) {
  res.render('nakuru', { title: 'Nakuru Branch' });
});


router.get('/meru', function(req, res) {
  res.render('meru', { title: 'Meru Branch' });
});


router.get('/mombasa', function(req, res) {
  res.render('mombasa', { title: 'Mombasa Branch' });
});


router.get('/thika', function(req, res) {
  res.render('thika', { title: 'Thika Branch' });
});



router.get('/kisumu', function(req, res) {
  res.render('kisumu', { title: 'Kisumu Branch' });
});


router.get('/embu', function(req, res) {
  res.render('embu', { title: 'Embu Satellite Office' });
});


router.get('/kakamega', function(req, res) {
  res.render('kakamega', { title: 'Kakamega Branch' });
});


router.get('/bungoma', function(req, res) {
  res.render('bungoma', { title: 'Bungoma Sattelite Office' });
});


router.get('/eldoret', function(req, res) {
  res.render('eldoret', { title: 'Eldoret Branch' });
});


module.exports = router;
