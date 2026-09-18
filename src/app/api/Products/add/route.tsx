import { connectDB } from "@/lib/connectDB";
import product from "@/Model/product";

export async function GET(req:any) {
    await connectDB() 

    const ReqBody = await req.json()
    const NewProduct = await product.create(ReqBody)

    if(!NewProduct) return Response.json({ error: "Empty product!" }, { status: 404 })
        return Response.json(NewProduct)
    
} 