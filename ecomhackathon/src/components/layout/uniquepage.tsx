import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import female3 from "/public/female3.png"
import Link from 'next/link'

const Uniquepage = () => {
    return (
        <div className='flex pt-16'>
            <Image src={female3} height={1050} width={550} alt='' className='pr-6' />
            <div className='flex flex-col justify-center'>
                <p className='pb-8 '>This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                </p>
                <Button className=''><Link href={"/product"}> See All Products</Link></Button>
            </div>
        </div>
    )
}

export default Uniquepage