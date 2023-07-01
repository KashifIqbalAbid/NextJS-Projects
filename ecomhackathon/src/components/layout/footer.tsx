import Image from 'next/image'
import React from 'react'
import logo from "/public/logo.webp"
import Link from 'next/link'
const Footer = () => {
    return (
        <div>
            <div className='flex flex-row py-20 w-full'>
                <div className='flex flex-col w-1/2' >
                    <Image src={logo} width={200} className='pb-4' alt='logo' />
                    <p className='font-serif w-80 pb-4 leading-8'>
                        Small, artisan label that offers a
                        thoughtfully curated collection of high
                        quality everyday essentials made
                    </p>
                    <p className='font-bold'>social logos</p>
                </div>
                <div className='flex flex-col  w-1/4'>
                    <p className='text-2xl font-bold'>Company</p>
                    <Link className='py-2' href={""}>About</Link>
                    <Link href={""}>Terms of Service</Link>
                    <Link className='py-2' href={""}>Privacy Policy</Link>
                    <Link href={""}>How it Works</Link>
                    <Link className='py-2' href={""}>Contact Us</Link>
                </div>
                <div className='flex flex-col w-1/4'>
                    <p className='text-2xl font-bold'>Support</p>
                    <Link className='py-2' href={""}>Support Service</Link>
                    <Link href={""}>24th Service</Link>
                    <Link className='py-2' href={""}>Quick Chat</Link>
                </div>
                <div className='flex flex-col w-1/4'>
                    <p className='text-2xl font-bold'>Contact</p>
                    <Link className='py-2' href={""}>Whatsapp</Link>
                    <Link href={""}>Support 24th</Link>
                </div>
            </div>
            <hr className='font-bold' />
            <div className='flex justify-between py-8'>
                <div> <p>Copyright © 2023</p><p className='font-bold'> Dine Market</p>
                </div>
                <div>
                    <p>Design By.</p>
                    <p className='font-bold'>Weird </p>
                    <p className='font-bold'>Desgn </p>
                    <p className='font-bold'>Studio</p>
                </div>
                <div>
                    <p>Code By.</p>
                    <p className='font-bold'>kashifdesign</p>

                </div>

            </div>
        </div>

    )
}

export default Footer