import { connectDB } from '@/lib/connectDB';
import product from '@/Model/product';

export async function GET(req:any) {
  await connectDB();

  // const { id } = await req.json();

  // const res = await fetch('api/Products/add' , {
  //   body: JSON.stringify({ id }),
  // })
  // const data = await res.json()

  
  // await product.findByIdAndDelete(data);

  return Response.json({ message: "Product deleted successfully" });
}
 