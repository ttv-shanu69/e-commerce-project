import { connectDB } from "@/lib/connectDB";
// import product from "@/Model/product";
import product from '@/Model/product';

export async function GET(req:any) {
  const DB = await connectDB();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("_id"); // or get from params if using Next.js params
  if (!id) return Response.json({ error: "Product ID is required" }, { status: 400 });

  const Product = await product.findById(id);

  if (!Product) return Response.json({ error: "Product not found" }, { status: 404 });

  return Response.json(Product);
}