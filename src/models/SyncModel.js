import { Schema, model }from 'mongoose';

const syncDiscord = new Schema ({
    userID: String,
    uses: { type: Number, default: 0 },
    code: { type: String, required: true },
    timestamp: { type: Date, default: Date.now, expires: 30 },
  
})

export default model("syncdiscord", syncDiscord);
