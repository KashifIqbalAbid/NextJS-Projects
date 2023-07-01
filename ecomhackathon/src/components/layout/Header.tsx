import Image from 'next/image'
import React from 'react'
import logo from "public/logo.webp"
import Link from 'next/link'
import { Badge, ShoppingCart } from 'lucide-react'

const Header = () => {


    return (

        <div className='flex items-center rounded-md justify-between text-black h-12 px-4 py-4 '>
            <Link href={"/"}>  <Image className='items-center animate-bounce' src={logo} alt='logo' height={40} width={150} /></Link>
            <ul className='flex justify-evenly gap-x-4 items-center font-serif font-bold'>
                <li className='cursor-pointer'><Link href={"/male"} className='hover:border-b-2 border-green-800 transition-all border-solid'> Male</Link></li>
                <li className='cursor-pointer'><Link href={"/female"} className='hover:border-b-2 border-green-800 transition-all border-solid'> Female</Link></li>
                <li className='cursor-pointer'><Link href={"/kids"} className='hover:border-b-2 border-green-800 transition-all border-solid'>Kids</Link></li>
                <li className='cursor-pointer'><Link href={"/product"} className='hover:border-b-2 border-green-800 transition-all border-solid'>All Products</Link ></li>
            </ul>
            <input type='text' placeholder='What you looking for' className=' w-72 rounded-md border-2 border-solid border-gray-300 pl-3 py-1' />

            <Link href={'/'}>
                <div className='w-10 h-10 rounded-full bg-gray-300 flex justify-center items-center'>
                    <ShoppingCart className='cursor-pointer' />
                </div>
            </Link>
        </div>
    )
}

export default Header