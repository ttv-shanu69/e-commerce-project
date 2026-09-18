import Link from 'next/link'
import { FaWhatsapp, FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

function Socialicons() {
  return (
    <div> 
        <Link
        href={"https://wa.me/923330214445?text='Hello, Welcome to Zainab Zara Official'"}
        target='_blank'
        className='whatsapp-btn fixed bottom-9 text-white bg-green-500 p-2 right-8 z-10'
        >
            <FaWhatsapp size={40} />
        </Link>

        <Link
        href={"https://www.facebook.com/fashvila?mibextid=wwXIfr&rdid=Bf7T9mFBLpUvgFTC&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252F1HqPrSmPHN%252F%253Fmibextid%253DwwXIfr#"}
        target='_blank'
        className='whatsapp-btn fixed bottom-27 text-white bg-blue-500 p-2 right-8 z-10'
        >
            <FaFacebook size={40} />
        </Link>

        <Link
        href={"https://www.instagram.com/zainabzaraofficial?igsh=ZzJtMXoxMXZ2andh&utm_source=qr"}
        target='_blank'
        className='insta-color whatsapp-btn fixed bottom-45 text-white bg-purple-500 p-2 right-8 z-10'
        >
            <FaInstagram size={40} />
        </Link>
    </div>
  )
}

export default Socialicons
