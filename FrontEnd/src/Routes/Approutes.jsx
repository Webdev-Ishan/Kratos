import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
import UserAuth from '../Auth/userAuth';
const Approutes = () => {
  return (
    <div>
      
<BrowserRouter>

<Routes>
<Route path='/' element= {<UserAuth>  <Home/>  </UserAuth>}  />
<Route path='/Login' element= {<Login/>}  />
<Route path='/Register' element= {<Register/>}  />
<Route path='/Projects' element= {  <UserAuth>  <Projects/>  </UserAuth>   }  />

</Routes>


</BrowserRouter>

    </div>
  )
}

export default Approutes
