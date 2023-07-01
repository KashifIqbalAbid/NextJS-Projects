import ProductCard from '@/components/views/productcard'
import { mock } from '@/lib/mock'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const Products: FC<any> = ({ params: { category } }: { params: { category: string } }) => {
    //onst cat = useRouter();
    const filteredprod = mock.filter((item) => { return item.category == category })
    //console.log(filteredprod);
    return (
        <div className='flex flex-wrap justify-evenly py-16'>
            {filteredprod.map((item) => <ProductCard id={item.id} key={item.id} name={item.name} price={item.price} category={item.category} image={item.image} />)}

        </div>

    )
}

export default Products