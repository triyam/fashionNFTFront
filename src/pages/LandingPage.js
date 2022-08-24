import React from 'react'

import Navbar from '../components/LandingPage/Navbar'
import Header from '../components/LandingPage/Header'
import Spotlight from '../components/LandingPage/Spotlight'
import TopCollection from '../components/LandingPage/TopCollection'
import TrendingNFTs from '../components/LandingPage/TrendingNFTs'
import NotableArticles from '../components/LandingPage/NotableArticles'
import Footer from '../components/LandingPage/Footer'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <Spotlight/>
        <TopCollection/>
        <TrendingNFTs/>
        <NotableArticles/>
        <Footer/>
    </div>
  )
}

export default LandingPage