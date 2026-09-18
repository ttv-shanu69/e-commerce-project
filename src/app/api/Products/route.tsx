import { connectDB } from "@/lib/connectDB";
import Product from '@/Model/product'

export async function GET() {
  await connectDB();

  return Response.json({ message: "Connected successfully!" });
}
// 