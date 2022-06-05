import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../db";
import { Entry } from "../../../interfaces";
import { EntryModel, IEntry } from "../../../models";

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
  switch (req.method) {
    case "GET":
      return getEntries(res);

    case "POST":
      return insertEntry(req.body, res);

    default:
      return res.status(404).json({ message: "Endpoint not found!" });
  }
}

const getEntries = async (res: NextApiResponse) => {
  await db.connect();

  const entries = await EntryModel.find();

  await db.disconnect();
  res
    .status(200)
    .json({ status: "successful", results: entries.length, data: entries });
};

const insertEntry = async (entry: Entry, res: NextApiResponse) => {
  await db.connect();

  const entryAdded = await EntryModel.create({
    ...entry,
    createdAt: Date.now(),
  });

  await db.disconnect();
  res.status(200).json({ status: "successful", data: entryAdded });
};
