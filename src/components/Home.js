import React from 'react'
import './Home.css'
import homeimg from '../homeimg.png'

function Home() {
    return (
        
        <div className='homemain'>
            <h1> this is a test </h1>
            <img src={homeimg} alt='homeimg' className='homeimg'/>
        </div>
    )
}

export default Home
