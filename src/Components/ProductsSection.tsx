// import { ProductDetails } from '../Data/ProductsData'
import Link from 'next/link'
import Image from 'next/image'
import CollectionCards from './Collection'
import Product from './Product'
// import { image } from 'motion/react-m'

function ProductsList() {
  return (
    <> 
      <div className="w-full pb-16">
        <div className="max-w-7xl mx-auto py-6">

            {/* Products Heading */}   
            <h2 className="px-4 py-12 text-3xl sm:text-4xl font-semibold">SHOP BY CATEGORY</h2>

            {/* Collection List  */}
            <CollectionCards />

             {/* Products List  */}
            {/* <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-2">
            {ProductDetails.map((product) => (
                <Link key={product.id} href={`/Product/${product.id}`}>
                  {/* Overlay
                  <div className="relative inset-x-2 inset-y-7/8 cartBtn-bg opacity-100 w-full max-w-2/6 flex justify-center items-center rounded-lg shadow-xl shadow-black/40">
                    <Link href={"/"} className='text-white text-sm p-2'>
                      Add to Cart
                    </Link>
                  </div> */}

                  {/* Product */}
                  {/* <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={product.name}
                  src={product.image}
                  width={300}
                  height={300}
                  />
                </Link> */}
            {/* ))} */}
            {/* </div> */} 

            <Product />

        </div>
      </div>
    </>
  )
}

export default ProductsList
