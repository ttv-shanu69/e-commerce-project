"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { MapPin } from 'lucide-react'

import Image from "next/image";

function Testimonial() {

    const Testimonials = [
    {
      name: "Nusrat Jahan",
      role: "Project Manager",
      quote:
        "My first Experience with smart shop was amazing. The quality of dress is excellent, and I recieved the delivery on time. Definetely ordering again!",
      image: "/tst-image.jpg",
      location: "Los Angeles, USA",
    },
    {
      name: "Nusrat Jahan 2",
      role: "CEO",
      quote:
        "My first Experience with smart shop was amazing. The quality of dress is excellent, and I recieved the delivery on time. Definetely ordering again!",
      image: "/tst-image.jpg",
      location: "Los Angeles, USA",
    },
  ];

  return (
    <div>
      <div className="w-full py-16 pb-22">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Arrows */}
        <div className="fixed top-1/4 left-10 -translate-y-1/2 z-50 cursor-pointer swiper-button-prev p-3 bg-white shadow-md rounded-full">
          &#8249;
        </div>
        <div className="fixed top-1/2 left-4 -translate-y-1/2 z-10 cursor-pointer swiper-button-next p-3 bg-white shadow-md rounded-full">
          &#8250;
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={30}
          slidesPerView={1}
          className="pb-10"
        >
          {Testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white p-8 rounded-2xl max-w-3xl mx-auto flex flex-col items-center text-center space-y-4">
                <div className="w-28 h-28 sm:w-38 sm:h-38 relative">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold">“{t.quote}”</p>
                <div className="flex items-center space-x-4 pt-4">
                    <h3 className="text-md font-semibold">{t.name}</h3>
                    <p className="text-md italic text-gray-400">{t.role}</p>
                </div>
                <div className="flex items-center">
                    <MapPin />
                    <p className="text-black text-sm italic font-semibold">{t.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </div>
    )
}

export default Testimonial
