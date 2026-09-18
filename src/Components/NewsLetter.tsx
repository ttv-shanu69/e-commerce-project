"use client";
import { useState } from "react";

function NewsLetter() {
    const [subscribervalue, setsubscribervalue] = useState('')

  return (
    <div className='w-full py-16 sm:py-24 bg-black text-white'>
        <div className='max-w-7xl mx-auto py-15'>
            <div className='text-center space-y-2'>
                <h2 className='sm:text-3xl text-white font-semibold px-7 text-2xl'>DON'T MISS OUT!</h2>
                <p className='text-gray-400 px-7 py-2 text-sm sm:text-base'>Subscribe our newsletter and stay in the know - no spam, just the good stuff.</p>
            </div>

            <div className='flex justify-center items-center pt-12'>
            <form>
                <input
                type="text"
                placeholder='Subscribe'
                className='border p-2 sm:p-3'
                value={subscribervalue}
                onChange={(e) => setsubscribervalue(e.target.value)} 
                />

                <button
                type='submit'
                className='border p-2 bg-white text-black sm:p-3'
                >
                    Subscribe
                </button>
            </form>
        </div>   
        </div>
    </div>
  )
}

export default NewsLetter
