//import { Input } from "@/components/ui/input"
import React from 'react'
import { Button } from '../ui/button'

const Newsletter = () => {
    return (
        <div className='flex flex-col justify-center items-center py-28'>
            <div className='absolute -z-10 leading-9 text-8xl font-extrabold text-gray-200 pb-4'>Newsletter</div>
            <p className='pb-11 text-4xl font-bold font-serif leading-7'>Subscribe Our Newslette</p>
            <p className='font-mono py-2'>Get the latest information and promo offers directly</p>
            <div className='flex gap-x-3 pt-6'>
                <input type='text' placeholder='enter email address' className=' w-72 rounded-md border-2 border-solid border-blue-500 pl-3 py-1' />
                <Button >GET STARTED</Button>
            </div>
        </div>
    )
}

export default Newsletter