"use client"
import { Button } from '@/components/ui/button'
import ProductCard from '@/components/views/productcard'
import { mock } from '@/lib/mock'
import { producttype } from '@/lib/producttype'
import { Link } from 'lucide-react'
import Image from 'next/image'
import React, { FC, useState } from 'react'

const ProductDetail: FC<any> = ({ params: { productdetail } }: { params: { productdetail: string } }) => {
    //onst cat = useRouter();
    const [quantity, setQuantity] = useState(0);


    const item: any = mock.find(checkproduct);

    function checkproduct(prod: producttype): boolean {
        return prod.id == productdetail;
    }
    // console.log(productdetail);

    const product = <></>;
    return (
        <div className=''>
            <div className='flex py-8 gap-x-2'>
                <Image className=' rounded-lg object-contain' height={100} src={item.image} alt='img1' />
                <Image className='object-contain rounded-lg ' width={500} src={item.image} alt='img1' />
                <div className='flex flex-col'>
                    <h2 className='font-serif text-3xl font-bold pt-8'>{item.name}</h2>
                    <h4 className='text-gray-400'>{item.category}</h4>
                    <p className='text-2xl font-bold font-serif pt-8 pb-4'>Select Size</p>
                    <div className='flex gap-x-3'>
                        <Button>XS</Button>
                        <Button>S</Button>
                        <Button>M</Button>
                        <Button>L</Button>
                        <Button>XL</Button>
                    </div>
                    <div className='py-8'>
                        <p className='text-2xl text-red-800 font-bold pb-6'>Quantity:</p>
                        <Button onClick={() => { setQuantity(quantity - 1) }}>-</Button>
                        <span className='px-2'>{quantity}</span>
                        <Button onClick={() => { setQuantity(quantity + 1) }}>+</Button>

                    </div>
                    <div className='flex gap-x-8'>

                        <Button className='w-32'><svg className='' stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="26" width="26" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.79166 2H1V4H4.2184L6.9872 16.6776H7V17H20V16.7519L22.1932 7.09095L22.5308 6H6.6552L6.08485 3.38852L5.79166 2ZM19.9869 8H7.092L8.62081 15H18.3978L19.9869 8Z" fill="currentColor"></path><path d="M10 22C11.1046 22 12 21.1046 12 20C12 18.8954 11.1046 18 10 18C8.89543 18 8 18.8954 8 20C8 21.1046 8.89543 22 10 22Z" fill="currentColor"></path><path d="M19 20C19 21.1046 18.1046 22 17 22C15.8954 22 15 21.1046 15 20C15 18.8954 15.8954 18 17 18C18.1046 18 19 18.8954 19 20Z" fill="currentColor"></path></svg> <span className='text-1xl'> Add to Cart</span></Button>

                        <h4 className='text-2xl font-bold'>${item.price}</h4>
                    </div>

                </div>


            </div>

        </div>

    )
}

export default ProductDetail