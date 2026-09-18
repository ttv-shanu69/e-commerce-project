"use client";
import Image from "next/image"
import HeroImage from '../../public/tst-image.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroSection() {
  return (
    <>
      <div className="w-full pt-2">

        {/* Hero Content Div  */}
        <div className="relative sm:max-w-7xl mx-auto border rounded-2xl pt-12  bg-cover bg-center h-65 md:h-160 sm:h-130">
        <Image
        src={'/Banners/Hero-Banner.png'}
        alt="New Collection Dress Moments!"
        // height={100}
        // width={100}
        fill
        // className="object-cover"
         />
        </div>

      </div>
        <div className="w-full primary-bg-color py-4"></div>

    </>
  )
}

export default HeroSection
