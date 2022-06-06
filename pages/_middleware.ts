import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const { next } = NextResponse;

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  return next();
}

export const catchAsync =
  async (fn: any) => (res: NextResponse, req: NextRequest) =>
    fn(res, req, next).catch(next);
