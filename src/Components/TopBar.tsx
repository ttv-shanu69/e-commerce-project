import { Phone, Mail } from 'lucide-react'

export default function TopBar() {
  return (
    <div>
      <div className="w-full primary-bg-color">
        <div className="max-w-6xl mx-auto flex py-3 text-white px-4"> 
            <div className='flex items-center w-11/12'>
                <div className='flex items-center mr-4'>
                    <Phone size={20}/>
                    <span className='pl-2 text-sm md:text-md'>0333-0214445</span>
                </div>
                <div className='flex items-center mx-4'>
                    <Mail size={20}/>
                    <span className='pl-2'>admin@orvyofirm.com</span>
                </div>
            </div>

            {/* Translation Button */}
            <button
            className='border p-1 rounded-sm text-xs sm:text-sm'
            type='button'
            >English
            </button>      
        </div>
      </div>
    </div>
  )
}