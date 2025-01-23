import React from 'react'
import Homebg from '../assets/Homebg.jpg'
const Home = () => {
  return (
    <div className='w-full h-screen bg-cover ' style={{backgroundImage: `url(${Homebg})`}}>
      Home
    </div>
  )
}

export default Home
