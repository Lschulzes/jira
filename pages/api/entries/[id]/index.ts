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

  if (!mongoose.isValidObjectId(_id))
    return res.status(200).json({ message: "Id is not valid! " + _id });

  switch (req.method) {
    case "PATCH":
      return updateEntry(_id, req.body, res);

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
      res
        .status(404)
        .json({
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
