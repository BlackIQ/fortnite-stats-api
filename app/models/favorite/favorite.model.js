// Connections
import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  fortnite_id: {
    type: String,
    default: "",
  },
  user: {
    type: mongooseSchema.Types.ObjectId,
    ref: "User",
    default: null,
  },
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Favorite", schema);
