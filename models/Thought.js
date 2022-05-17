const { Schema, model, Types } = require("mongoose");
const User = require("./User");

const ReactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: "You must enter a thought",
    maxLength: 280,
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: formatTimestamp,
  },
  // toJSON: {
  //   getters: true,
  // },
});

const ThoughtSchema = new Schema(
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
      // get: formatTimestamp,
    },
    // username: {
    //   type: Schema.Types.ObjectId,
    //   required: true
    // },
    writtenBy: {
      type: String
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);


//RETRIEVES LENGTH OF THOUGHTS REACTIONS ARRAY FIELD
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

function formatTimestamp(date) {
  return moment(date).format("MMMM Do YY, h:mm a");
}
const Thought = model("Thought", ThoughtSchema);

module.exports = Thought;
