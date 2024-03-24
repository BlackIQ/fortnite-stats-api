// Connections
import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  fortnite_id: {
    type: String,
    default: null,
  },
  isMy: {
    type: Boolean,
    default: null,
  },
  user: {
    type: mongooseSchema.Types.ObjectId,
    ref: "User",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Log", schema);
