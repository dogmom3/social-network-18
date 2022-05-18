const { Schema,  Types } = require("mongoose");
// const User = require("./User");
const dateFormat = require('../utils/date-format');

const reactionSchema = new Schema({
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatTimeStamp => dateFormat(formatTimeStamp)
    },
    // toJSON: {
    //   getters: true
    // },
    id: false
  });

  //RETRIEVES LENGTH OF THOUGHTS REACTIONS ARRAY FIELD
// reactionSchema.virtual("reactionCount").get(function () {
//     return this.reactions.length;
//   });

  // function formatTimeStamp(date) {
  //   return moment(date).format("MMMM Do YY, h:mm a");
  // }

  // const Reaction = model("Reaction", reactionSchema);

module.exports = reactionSchema;