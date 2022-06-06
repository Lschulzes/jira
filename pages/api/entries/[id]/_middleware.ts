import mongoose from "mongoose";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const { next } = NextResponse;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  const _id = req.page.params?.id ?? "";

  const checkIfIsValidId = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkIfIsValidId.test(_id))
    return new Response(
      JSON.stringify({ message: "Id is not valid! " + _id }),
      { status: 400 }
    );

  return next();
}
