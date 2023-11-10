import { Schema, model }from 'mongoose';

const warnings = new Schema ({
    name: String,
    warnings: { type: Number, default: 1 },
    timestamp: { type: Date, default: Date.now, expires: 28800 },
  
})

export default model("warnings", warnings);
