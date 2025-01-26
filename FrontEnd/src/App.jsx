import './App.css'
import Approutes from './Routes/Approutes'
import { UserProvider } from './Context/user.context';
import 'remixicon/fonts/remixicon.css'

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
