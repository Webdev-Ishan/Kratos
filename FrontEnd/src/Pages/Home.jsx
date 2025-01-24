import React,{useContext} from 'react'
import Homebg from '../assets/Homebg.jpg'
import { UserContext } from '../Context/user.context.jsx';


const Home = () => {

  const {user} = useContext(UserContext)
  return (
    <div className='w-full h-screen bg-cover bg-center text-white ' style={{backgroundImage: `url(${Homebg})`}}>
      <h1 >{JSON.stringify(user)}</h1>
    </div>
  )
}

export default Home
