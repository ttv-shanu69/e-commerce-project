import Image from "next/image";
import DressImage from '../../public/ProductImages/Dress.jpg'

export default function CollectionCards() {
  return (
    <div className="w-full max-w-24/25 mx-auto flex items-center space-x-2">
    <div className="relative w-2/4 h-64">
      <Image
        src={DressImage}
        alt="Watch" 
        fill
        className="object-cover rounded-lg"
      /> 
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center">
        <p className="text-white font-bold text-lg">View Details</p>
      </div>
    </div>

    <div className="relative w-2/4 h-64">
      <Image
        src={DressImage}
        alt="Watch"
        fill
        className="object-cover rounded-lg"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 flex items-center justify-center">
        <p className="text-white font-bold text-lg">View Details</p>
      </div>
    </div>
    </div>
  );
}