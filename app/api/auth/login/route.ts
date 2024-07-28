// pages/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnect from "@/utils/db";
import User from "@/models/User";

// interface LoginRequest extends NextApiRequest {
//   body: {
//     username: string;
//     password: string;
//   };
// }

console.log("Hello World");

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ name: "John Doe" });
}
