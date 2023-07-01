import { StaticImageData } from 'next/image'
import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
const ProductCard: FC<any> = (props: { id: string, name: string, category: string, price: number, image: string | StaticImageData }) => {

    return (
        <div className='py-4'>
            <Link href={`/product/${props.id}`}>
                <Image className='object-center rounded-lg ' height={350} src={props.image} alt='img1' />
                <h2 className='font-serif text-lg font-bold'>{props.name}</h2>
                <h4>{props.category}</h4>
                <h4 className='text-2xl font-bold'>${props.price}</h4>
            </Link>

        </div>
    )
}

export default ProductCard