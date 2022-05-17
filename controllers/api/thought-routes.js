const router = require('express').Router()
const thoughtRoutes = require('thought-routes')

//CREATE A THOUGHT
router.post('/submit', ({ body }, res) => {
    db.Thought.create(body)
      .then(({ _id }) =>
        db.User.findOneAndUpdate({}, { $push: { thought: _id } }, { new: true })
      )
      .then(dbUser => {
        res.json(dbUser);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //GET ALL THOUGHTS
  router.get('/thought', (req, res) => {
    db.Note.find({})
      .then(dbThought => {
        res.json(dbThought);
      })
      .catch(err => {
        res.json(err);
      });
  });

  //DELETE A THOUGHT
  router.delete('/thought', (req, res) => {
    db.Note.find({})
      .then(dbThought => {
        res.json(dbThought);
      })
      .catch(err => {
        res.json(err);
      });
  });

  module.exports = thoughtRoutes;