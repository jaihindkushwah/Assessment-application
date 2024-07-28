import { NextResponse } from "next/server";
import dbConnect from "@/utils/db";
export async function GET() {
  await dbConnect();
  return new Response("Hello, Next.js!"); // Replace with your response
}
