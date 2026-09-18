"use client";
import product from "@/Model/product";
import { useEffect, useState } from "react";

export default function AdminPage() {
    
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", description: "", image: "" });

  const fetchProducts = async () => {
    const res = await fetch("/api/Products/get");
    const data = await res.json();
    setProducts(data);
  };

  const addProduct = async () => {
    await fetch("/api/Products/add", {
      method: "POST",
      body: JSON.stringify(form),
    });
    fetchProducts();
  };

  const deleteProduct = async (id:any) => {
    await fetch("/api/Products/delete", {
      method: "POST",
      body: JSON.stringify({ id }),
    });
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

      console.log(products)


  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Panel</h1>

      <div>
        <input placeholder="Name" onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input placeholder="Price" onChange={(e) => setForm({ ...form, price: e.target.value })} />
        <input placeholder="Description" onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Image URL" onChange={(e) => setForm({ ...form, image: e.target.value })} />

        <button onClick={addProduct}>Add Product</button>
      </div>

      <hr />
      <h2>All Products</h2>

      {products.map((item:any) => (
        <div key={item._id} style={{ margin: "10px 0" }}>
          <h3>{item.name}</h3>
          <p>{item.price}</p>
          <button onClick={() => deleteProduct(item._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
