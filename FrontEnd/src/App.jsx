import './App.css'
import Approutes from './Routes/Approutes'
import { UserProvider } from './Context/user.context';


function App() {
  

  return (
   <div>
      <UserProvider>
      <Approutes/>
      </UserProvider>
   </div>
  )
}

export default App
