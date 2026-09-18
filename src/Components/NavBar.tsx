"use client";
import { useState, useEffect } from "react";
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

export default function NavBar() {
    const [open, setOpen] = useState(false);
    const [menuOpen, setmenuOpen] = useState(false);

    const menuLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" }, 
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      <div className="w-full">
        <div className="max-w-6xl mx-auto flex items-center py-8">
            
            {/* Logo */}
            <div className="logo px-8 w-11/11 md:w-3/5 text-5xl primary-text-color">
                Z
            </div>

            {/* Navbar Links */}
            <div className="nav_links hidden md:flex space-x-5">
                <Link 
                className="text-xl primary-text-color font-medium"
                href={"/"}>
                    HOME 
                </Link>
                <Link
                className="text-xl primary-text-color font-medium"
                href={"/"}>
                    ABOUT
                </Link>
                <Link 
                className="text-xl primary-text-color font-medium"
                href={"/ProductsPage"}>
                    PRODUCTS
                </Link>
                <Link 
                className="text-xl primary-text-color font-medium"
                href={"/"}>
                    CONTACT
                </Link>
            </div>

            <div className="w-full flex items-center justify-end md:w-1/10 px-6">
              {/* Cart */}
            <div className="cart px-5">
              <button onClick={() => setOpen(!open)}>
                <ShoppingCart 
                className="primary-text-color cursor-pointer" size={30}/>
              </button>                
            </div>

             {/* hamburger button  */}
            <button
            onClick={() => setmenuOpen(!open)}
            className="md:hidden focus:outline-none"
            >
          <svg 
            className="w-7 h-7 sm:w-8" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d={
                open 
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              } 
            />
          </svg>
        </button>
            </div>

         {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}



      {/* Right-Side Cart Section */}
      <div
        className={`fixed top-0 right-0 h-full w-100 px-5 bg-white shadow-xl z-50 transform transition-transform duration-300
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-between items-center px-2 py-4 border-b">
          <div>
            <h2 className="text-xl font-semibold">Shopping Cart</h2>
            <span className="font-light">0 Items</span>
          </div>

          {/* Close Button */}
          <button onClick={() => setOpen(false)}>
            <svg className="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="py-10">
          <p className="px-1">No Cart Items!</p>
        </div>

        {/* Checkout Button */}
      <Link href={"/"}
      className="primary-bg-color flex justify-center items-center p-3 text-white rounded-xl"
      >
        Checkout
      </Link>
      </div>


       {/* Overlay */}
      {open && (
        <div
          onClick={() => setmenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
        />
      )}

      {/* Right-Side Menu for Mobile Section */}
      <div
        className={`fixed top-0 right-0 h-full w-80 px-0 bg-white shadow-xl z-50 transform transition-transform duration-300 md:hidden
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex justify-end items-center px-5 py-6">
          

          {/* Close Button */}
          <button onClick={() => setmenuOpen(false)}>
            <svg className="w-7 h-7 cursor-pointer" fill="none" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="pt-5 flex flex-col">
                <Link 
                className="text-xl primary-text-color font-medium border-b py-3 px-3"
                href={"/"}>
                    HOME
                </Link>
                <Link
                className="text-xl primary-text-color font-medium border-b py-3 px-3"
                href={"/"}>
                    ABOUT
                </Link>
                <Link 
                className="text-xl primary-text-color font-medium border-b py-3 px-3"
                href={"/ProductsPage"}>
                    PRODUCTS
                </Link>
                <Link 
                className="text-xl primary-text-color font-medium border-b py-3 px-3"
                href={"/"}>
                    CONTACT
                </Link>
        </div>

        {/* Checkout Button */}
      {/* <Link href={"/"}
      className="primary-bg-color flex justify-center items-center p-3 text-white rounded-xl"
      >
        Checkout
      </Link> */}
      </div>


        </div>
      </div>
    </>
  )
}