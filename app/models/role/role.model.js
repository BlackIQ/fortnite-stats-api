// Connections
import { mongodb } from "$app/connections/index.js";

import mongoose from "mongoose";
const mongooseSchema = mongoose.Schema;

export const schemaModel = {
  label: {
    type: String,
    default: "",
  },
  value: {
    type: String,
    default: "",
  },
  permissions: [
    {
      type: mongooseSchema.Types.ObjectId,
      ref: "Permission",
      default: [],
    },
  ],
};

export const schema = new mongooseSchema(schemaModel, { timestamps: true });

export default mongodb.model("Role", schema);
