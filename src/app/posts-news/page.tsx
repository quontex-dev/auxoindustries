import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'
import Certificates from '@/sections/posts-news/certificates'
import CustomerSection from '@/sections/posts-news/customers'
import React from 'react'

const page = () => {
    return (
        <div>
            {/* navbar */}
            <Navbar />
            {/* achievements */}
            <Certificates />
            {/* customers */}
            <CustomerSection/>
            {/* contactform */}
            <Contact />
        </div>
    )
}

export default page
