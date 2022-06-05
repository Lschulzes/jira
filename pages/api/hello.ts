// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";
import { Entry } from "../../interfaces";
import { EntryModel } from "../../models";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await db.connect();
  const data = await EntryModel.find();
  await db.disconnect();

  res.status(200).json({ data });
}
