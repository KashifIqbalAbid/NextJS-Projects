import React from 'react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import brand1 from "/public/brand1.webp"
import brand2 from "/public/brand2.webp"
import brand3 from "/public/brand3.webp"
import brand4 from "/public/brand4.webp"
import hero1 from "/public/hero1.webp"


const Hero = () => {
    return (
        <div className='flex mt-20 flex-1'>
            <div >
                <span className=' h-10 py-2.5 px-8 rounded-md text-lg w-26 bg-blue-100  text-blue-600 font-serif'>Sale 70%</span>
                <h1 className="my-10 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    An Industrial Take on Streetwear
                </h1>
                <h5>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</h5>
                <Button className='w-22 my-10'><svg className='' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"></path><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"></path><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"></path></svg> <span className='px-2 text-2xl'> Start Shopping</span></Button>
                <div className='flex gap-x-6 h-10 mt-4'>
                    <Image src={brand1} alt='brand1' />
                    <Image src={brand2} alt='brand1' />
                    <Image src={brand3} alt='brand1' />
                    <Image src={brand4} alt='brand1' />
                </div>
            </div>
            <div className='flex bg-gray-800 rounded-full'>
                <Image className='object-right' src={hero1} alt='hero' />
            </div>

        </div>
    )
}

export default Hero