import React from 'react'
import Navbar from '@/components/Menubar/Header'
import WhyUs from '@/components/LandingPage/WhyUs'
import Footer from '@/components/Menubar/Footer'

function Page() {
  return (
    <div>
      <Navbar />
      {/* Landing Page */}
      <WhyUs />
      <Footer />
    </div>
    
  );
}

export default Page;