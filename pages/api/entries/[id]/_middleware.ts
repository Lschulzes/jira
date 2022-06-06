import mongoose from "mongoose";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const { next } = NextResponse;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const _id = req.page.params?.id ?? "";
  console.log("first");
  if (!mongoose.isValidObjectId(_id))
    return new Response(
      JSON.stringify({ message: "Id is not valid! " + _id }),
      { status: 400 }
    );

  console.log("ss");
  return next();
}
