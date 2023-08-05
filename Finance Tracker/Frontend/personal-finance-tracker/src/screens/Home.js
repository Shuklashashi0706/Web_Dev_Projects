import React from 'react'
import Banner from '../components/Home/Banner'
import Experts from '../components/Home/Experts.js'
import Newletter from '../components/Home/Newletter.js'
import Plans from '../components/Home/Plans.js'
import Footer from '../components/Footer/Footer.js'

function Home() {
  return (
    <>
        <Banner/>
        <Experts/>
        <Newletter/>
        <Plans/>
        <Footer/>
    </>
  )
}

export default Home