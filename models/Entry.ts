import mongoose, { Model, Schema, model, models } from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry {}

const EntrySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: { type: Number, required: true, default: Date.now() },
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
