import { mock } from '@/lib/mock'
import { producttype } from '@/lib/producttype'
import React from 'react'
import ProductCard from './productcard'
import promotion3 from "/public/promotion3.webp"
import Image from 'next/image'
import { Button } from '../ui/button'

const ProductList = () => {
    const productChecked = mock.slice(3, 5);
    return (
        <div className='flex justify-between gap-x-6'>
            <div className='flex flex-col'>
                <Image className='mt-6 w-96 h-44 bg-slate-400 rounded-2xl' src={promotion3} alt='promo3' />
                <div className='mt-3 flex flex-col items-center justify-center rounded-2xl   w-96 h-48 bg-gray-800 text-white'>
                    <p className='py-4 text-4xl font-bold tracking-widest'> GET 30% OFF</p>
                    <p className='pb-2'>USE PROMO CODE</p>
                    <Button className='text-2xl font-bold'>DINE WEEKEND SALE</Button>
                </div>
            </div>
            <div className='flex justify-between gap-x-6'>
                {productChecked.map((item) => <ProductCard id={item.id} key={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />)}

            </div>
        </div>
    )
}

export default ProductList