
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import { Heart } from 'lucide-react'
import Header from '@/components/layout/Header'
import Hero from '@/components/views/hero'
import Productlist from '@/components/views/productlist'
import Newsletter from '@/components/views/newsletter'
import Productspecs from '@/components/layout/productspecs'
import Uniquepage from '@/components/layout/uniquepage'
//import { logo } from "../../public/logo.jpg"
Header

export default function Home() {

  return (
    <div className='px-12'>
      <Hero />
      <h3 className='flex justify-center text-blue-800 font-bold pt-12'>PROMOTIONS</h3>
      <h2 className='flex justify-center py-4 text-3xl font-serif leading-3 tracking-widest'>Our Promotions Events</h2>
      <Productlist />
      <Productspecs />
      <Uniquepage />
      <Newsletter />
    </div>
  )
}
