const router = require('express').Router()
const userRoutes = require('user-routes');

//CREATE USER
db.User.create({})
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

//GET ALL USERS
router.get('/user', (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //GET USER BY ID
  router.get('/user/:id', (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });
  

  //UPDATE USER
  router.put('/user', (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //DELETE USER 
  router.delete('/user', (req, res) => {
    db.User.find({})
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = userRoutes;