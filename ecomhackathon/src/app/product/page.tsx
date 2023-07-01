import ProductCard from '@/components/views/productcard'
import { mock } from '@/lib/mock'
import React from 'react'

const AllProducts = () => {
    return (
        <div className='flex flex-wrap justify-evenly py-16'>
            {mock.map((item) => <ProductCard key={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />)}

        </div>
    )
}

export default AllProducts