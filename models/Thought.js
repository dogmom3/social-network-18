const { Schema, model } = require('mongoose');
const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId, 
    default: new Schema.Types.ObjectId
  },
  reactionBody: {
    type: String,
    required: "You must enter a thought",
    maxLength: 280
  },
  username: {
    type: String,
    required: "You must enter a username"
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatTimestamp
  }
})

const ThoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: "You must enter a thought",
    minLength: 1,
    maxLength: 280
  },
createdAt: {
  type: Date,
  default: Date.now,
  get: formatTimestamp
},
username: {
  type: String,
  required: "You must enter a username"
},
reactions: [
  ReactionSchema 
]
});

function formatTimestamp(date){
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  
}

UserSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;
