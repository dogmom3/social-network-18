const { Schema, model, Types } = require("mongoose");
const User = require("./User");
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/date-format');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "You must enter a thought",
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    username: {
      type: String,
      required: true
    },
    // writtenBy: {
    //   type: String
    // },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      // virtuals: true,
      getters: true,
    },
    _id: false,
  }
);


//RETRIEVES LENGTH OF THOUGHTS REACTIONS ARRAY FIELD
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// function formatTimeStamp(date) {
//   return moment(date).format("MMMM Do YY, h:mm a");
// }
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;
