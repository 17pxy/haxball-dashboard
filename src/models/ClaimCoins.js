import { Schema, model } from "mongoose";

const claimCoins = new Schema({
  name: String,
  claimedCoins: { type: Boolean, default: true },
  timestamp: { type: Date, default: Date.now, expires: 10 },
});

export default model("claimCoins", claimCoins);
