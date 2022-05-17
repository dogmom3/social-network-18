const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect('mongodb://localhost/social-network');

const userSeeds = [
  {
    userName:  'Blair',
    email: 'blair.seivers@gmail.com'
},
{
    userName: 'Waldo',
    email: 'waldo.puppito@yahoo.com'
},
{
    userName: 'Arlene',
    email: 'arlene@dogmail.com'
}
];

 db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeeds))
  .then((data) => {
    console.log(data.insertedCount + ' records inserted!');
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });