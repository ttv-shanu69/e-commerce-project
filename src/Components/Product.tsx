import { ProductDetails } from '@/Data/ProductsData'
import Link from 'next/link'
import Image from 'next/image'
import { number } from 'motion'



function Product() {

    

    

  return (
    <div>
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-2">
            {/* {ProductDetails.map((product) => (
                <Link key={product.id} href={`/Product/${product.id}`}>
                  {/* Overlay
                  <div className="relative inset-x-2 inset-y-7/8 cartBtn-bg opacity-100 w-full max-w-2/6 flex justify-center items-center rounded-lg shadow-xl shadow-black/40">
                    <Link href={"/"} className='text-white text-sm p-2'>
                      Add to Cart
                    </Link>
                  </div> */} 

                  {/* Product */} 
                  <Link href={`/Product/${ProductDetails[0].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[0].name}
                  src={ProductDetails[0].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[1].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[1].name}
                  src={ProductDetails[1].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[2].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[2].name}
                  src={ProductDetails[2].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[3].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[3].name}
                  src={ProductDetails[3].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[4].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[4].name}
                  src={ProductDetails[4].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[5].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[5].name}
                  src={ProductDetails[5].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[6].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[6].name}
                  src={ProductDetails[6].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[7].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[7].name}
                  src={ProductDetails[7].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[8].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[8].name}
                  src={ProductDetails[8].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[9].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[9].name}
                  src={ProductDetails[9].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[10].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[10].name}
                  src={ProductDetails[10].image}
                  width={300}
                  height={300}
                  />
                  </Link>

                  <Link href={`/Product/${ProductDetails[11].id}`}>
                  <Image
                  className="w-full h-90 object-cover cursor-pointer"
                  alt={ProductDetails[11].name}
                  src={ProductDetails[11].image}
                  width={300}
                  height={300}
                  />
                  </Link>


                {/* </Link>
             ))} */}
            </div>
    </div>
  )
}

export default Product
