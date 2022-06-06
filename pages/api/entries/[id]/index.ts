import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../../db";
import { Entry } from "../../../../interfaces";
import { IEntry, EntryModel } from "../../../../models";
type Response =
  | {
      status: string;
      results: number;
      data: Array<IEntry>;
    }
  | { message: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response>
) {
  const _id = String(req.query?.id) ?? "";

  switch (req.method) {
    case "GET":
      return getEntry(_id, res);

    case "PATCH":
      return updateEntry(_id, req.body, res);

    case "DELETE":
      return deleteEntry(_id, res);

    default:
      return res.status(404).json({ message: "Endpoint not found!" });
  }
}

const updateEntry = async (_id: string, entry: Entry, res: NextApiResponse) => {
  await db.connect();

  const { status = "TODO" } = entry;

  try {
    const entryUpdated = await EntryModel.findOneAndUpdate(
      {
        _id,
      },
      { status },
      { returnOriginal: false, runValidators: true }
    );

    if (!entryUpdated)
      res.status(404).json({
        status: "failed",
        message: "No entry found with the id of " + _id,
      });

    res.status(200).json({ status: "successful", data: entryUpdated });
  } catch (error) {
    res
      .status(401)
      .json({ status: "failed", message: `Status ${status} is not valid` });
  }

  await db.disconnect();
};

const getEntry = async (_id: string, res: NextApiResponse) => {
  await db.connect();
  console.log("first");
  try {
    const entry = await EntryModel.findOne({
      _id,
    });

    if (!entry)
      res.status(404).json({
        status: "failed",
        message: "No entry found with the id of " + _id,
      });

    res.status(200).json({ status: "successful", data: entry });
  } catch (error) {
    res.status(500).json({ status: "failed", message: `Server fault!` });
  }

  await db.disconnect();
};

const deleteEntry = async (_id: string, res: NextApiResponse) => {
  await db.connect();

  try {
    const entryDeleted = await EntryModel.findOneAndDelete({
      _id,
    });

    if (!entryDeleted)
      res.status(404).json({
        status: "failed",
        message: "No entry found with the id of " + _id,
      });

    res.status(201).json({});
  } catch (error) {
    res.status(500).json({ status: "failed", message: `Server fault!` });
  }

  await db.disconnect();
};
