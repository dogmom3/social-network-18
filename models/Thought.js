const { Schema, model } = require('mongoose');
const Thought = model('Thought', ThoughtSchema);

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
],
  toJSON: {
      virtuals: true,
      getters: true
  },
  id: false
});

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
  },
  toJSON: {
    getters: true
  }
});

//RETRIEVES LENGTH OF THOUGHTS REACTIONS ARRAY FIELD
ThoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length
});

function formatTimestamp(date){
  return moment(date).format('MMMM Do YY, h:mm a');
}

module.exports = Thought;
