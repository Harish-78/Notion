const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  data: {
    type: Schema.Types.Mixed,
  },
  config: {
    type: Schema.Types.Mixed,
  },
});

module.exports = mongoose.model("User", userSchema);
