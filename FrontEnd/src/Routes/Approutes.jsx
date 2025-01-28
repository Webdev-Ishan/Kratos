import React from 'react'
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import Home from '../Pages/Home';
import Projects from '../Pages/Projects';
const Approutes = () => {
  return (
    <div>
      
<BrowserRouter>

<Routes>
<Route path='/' element= {<Home/>}  />
<Route path='/Login' element= {<Login/>}  />
<Route path='/Register' element= {<Register/>}  />
<Route path='/Projects' element= {<Projects/>}  />

</Routes>


</BrowserRouter>

    </div>
  )
}

export default Approutes
