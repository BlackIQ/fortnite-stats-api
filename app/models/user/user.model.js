// Connections
import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  fortnite_id: {
    type: String,
    default: null,
  },
  telegram_id: {
    type: String,
    default: null,
  },
  is_premium: {
    type: Boolean,
    default: null,
  },
  username: {
    type: String,
    default: null,
  },
  first_name: {
    type: String,
    default: null,
  },
  last_name: {
    type: String,
    default: null,
  },
  role: {
    type: mongooseSchema.Types.ObjectId,
    ref: "Role",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("User", schema);
