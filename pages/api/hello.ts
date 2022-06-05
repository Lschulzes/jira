// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../db";
import { EntryModel } from "../../models";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await db.connect();
  const data = await EntryModel.find();
  await db.disconnect();
  // @ts-ignore
  res.status(200).json({ data });
}
