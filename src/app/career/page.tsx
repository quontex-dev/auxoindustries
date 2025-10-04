import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import CareerPath from '@/sections/career/career-path'
import Hero from '@/sections/career/hero'
import React from 'react'

const page = () => (
  <div>
    {/* navbar */}
    <Navbar />
    {/* hero */}
    <Hero />
    {/* careerpath */}
    <CareerPath />
    {/* contactform */}
    <Contact />
  </div>
)

export default page
