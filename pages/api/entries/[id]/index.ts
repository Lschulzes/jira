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
  const id = String(req.query?.id) ?? "";

  switch (req.method) {
    case "PATCH":
      return updateEntry(id, req.body, res);

    default:
      return res.status(404).json({ message: "Endpoint not found!" });
  }
}
const updateEntry = async (_id: string, entry: Entry, res: NextApiResponse) => {
  await db.connect();

  const { status = "TODO" } = entry;

  const entryUpdated = await EntryModel.findOneAndUpdate(
    {
      _id,
    },
    { status },
    { returnOriginal: false }
  );

  await db.disconnect();
  res.status(200).json({ status: "successful", data: entryUpdated });
};
