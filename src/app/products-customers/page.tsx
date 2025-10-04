import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Partners from '@/components/partners'
import CustomerSection from '@/sections/products-customers/Customers'
import Products from '@/sections/products-customers/products'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      {/* partners */}
      <Partners heading=" Our Product portfolio!"/>
      {/* poductsection */}
      <Products/>
      {/* customersection */}
      <CustomerSection/>
      {/* contact */}
      <Contact/>

    </div>
  )
}

export default page
