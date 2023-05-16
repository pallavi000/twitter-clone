const mongoose = require("mongoose");
import User from "./User";

const TweetSchema = new mongoose.Schema(
  {
    tweet: { type: String, required: true },
    image: { type: String },
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: User },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Tweet || mongoose.model("Tweet", TweetSchema);
