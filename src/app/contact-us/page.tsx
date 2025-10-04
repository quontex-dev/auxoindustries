import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Plants from '@/sections/contact-us/plants'
import React from 'react'

const page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar/>
      {/* contactform */}
      <section className='mt-15 pt-15'>
         <Contact/>
      </section>
     
      {/* Plants */}
      <Plants/>
    </div>
  )
}

export default page
