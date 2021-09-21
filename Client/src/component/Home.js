import React from 'react'
import Destinations from './Destinations'
import Showcase from './Showcase'
import Footer from './Footer'
import './Homestyle.css'
import Header from './Header'

function Home() {
    return (
        <div>
            <Header/>
            <Showcase/>
            <Destinations/>
            <Footer/>
        </div>
    )
}

export default Home
