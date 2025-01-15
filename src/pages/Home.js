import React from 'react'
import '../App.css'

import { Features, Footer, Header, WhatQsound } from '../containers';
import { Navbar } from '../components';

function Home() {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatQsound />
      <Features />
      <Footer />
    </div>
  )
}


export default Home

