import { connectDB } from "@/lib/connectDB";
import product from "@/Model/product";

export async function POST(req:any) {
  await connectDB();

  const { id, ...updatedData } = await req.json();

  const updatedProduct = await product.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  return Response.json(updatedProduct);
}
 