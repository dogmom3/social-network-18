const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const UserSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: "You must enter a username",
    trim: true,
  },

  email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },

  //ADD EVENTUALLY?
  // password: {
  //   type: String,
  //   trim: true,
  //   required: 'Password is Required',
  //   validate: [({ length }) => length >= 6, 'Password should be longer.']
  // },

  userCreated: {
    type: Date,
    default: Date.now
  },

  thoughts: [
    {
      type: Schema.Types.ObjectId,
      // default: Types.ObjectId(),
      ref: 'Thought',
    },
  ],

  friends: [
    {
      type: Schema.Types.ObjectId,
      // type: String,
      ref: 'User',
    },
  ],
},
{
  toJSON: {
    virtuals: true,
    // getters: true,
  },
  id: false,
});

//RETRIEVES NUMBER OF USERS FRIENDS 
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

const User = model("User", UserSchema);

module.exports = { User, Thought };
