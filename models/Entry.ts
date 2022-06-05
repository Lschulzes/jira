import mongoose, { Model, Schema, model, models } from "mongoose";
import { Entry } from "../interfaces";

interface IEntry extends Entry {}

const EntrySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Number },
  status: {
    type: String,
    enum: {
      values: ["TODO", "IN_PROGRESS", "COMPLETED", "IN_TEST"],
      message: "{VALUE} is not allowed",
    },
  },
});

export const EntryModel: Model<IEntry> =
  models.Entry ?? model("Entry", EntrySchema, "entries");

export default EntryModel;
