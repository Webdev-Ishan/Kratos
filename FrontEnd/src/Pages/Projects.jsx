import React,{useState} from 'react';
import { useLocation } from 'react-router-dom';

const Projects = () => {
  const location = useLocation();

const [ispanelopen, setispanelopen] = useState(false)
const [isModalOpen, setIsModalOpen] = useState(false);
const [selectedUserId, setSelectedUserId] = useState(null);


const [users, setUsers] = useState([
  { id: '1', name: 'User One' },
  { id: '2', name: 'User Two' },
  { id: '3', name: 'User Three' },
  
]);  



  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
    setIsModalOpen(false); // Close the modal after selecting a user
  };

  return (
    <main className='h-screen bg-black w-screen flex border-2 border-white'>


<div  className={`h-full min-w-65 fixed top-0 bg-blue-600 border-l-1 border-b-2 border-white flex flex-col ${ispanelopen ? 'left-0' : '-left-full'} duration-300`}>
       
        <header className='w-full h-10 bg-black border-t-1 border-b-1 border-white flex justify-end items-center p-2 px-6 '>

        <i onClick={()=>{setispanelopen(!ispanelopen)}} className="ri-close-large-fill text-white cursor-pointer hover:text-red-600 duration-300"></i>
        </header>


<div className='users flex flex-col gap-2'>

<div className='user flex items-center gap-2 p-2  duration-300 cursor-pointer'> 

  <div className='bg-white text-black p-2 rounded mb-2 w-full hover:bg-slate-300 duration-300 '>
  <i className="ri-user-6-fill text-black text-xl"></i><span className='font-normal ml-4 text-md'> Username</span>
  </div>
</div>



</div>



      </div>

      <section className='left h-full min-w-60 bg-slate-800 border-r-2 border-white flex flex-col'>
        <header className='flex justify-between p-2 px-5 w-full bg-blue-600 border-b-2 border-white'>



        <button className='cursor-pointer p-2' onClick={() => setIsModalOpen(true)}>
            <i className="ri-user-add-fill text-white text-lg"></i>
            <span className='font-normal ml-1 text-sm text-white'>Add User</span>
          </button>


          <button className='p-2' onClick={()=>setispanelopen(!ispanelopen)}>
            <i className="ri-group-fill text-white hover:text-black duration-300 cursor-pointer"></i>
          </button>


        </header>

        <div className="conversational-area flex flex-col flex-grow">
          <div className="message-box flex-grow p-4 overflow-y-auto">
          <div className="message bg-white text-black p-2 rounded mb-2 border-2 border-transparent hover:border-blue-600  duration-300">
              <p>Hello, how are you?</p>
            </div>
            <div className="message bg-blue-500 text-white p-2 rounded mb-2 border-2 border-transparent hover:border-white  duration-300 self-end">
              <p>I'm good, thank you!</p>
            </div>
          </div>
        

          <div className="input-field border-2 border-black flex">
            <input
              className='flex-grow px-4   bg-white border-t-1 border-black  focus:outline-none'
              type="text"
              placeholder='Enter the message'
            />
            <button className='p-2 px-3  bg-slate-900  text-white  cursor-pointer'>
              <i className="ri-send-plane-2-fill hover:text-blue-600 duration-300"></i>
            </button>
          </div>
        </div>
      </section>


      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-slate-800 p-6 rounded-lg shadow-lg w-full max-w-md'>
            <h2 className='text-2xl font-normal mb-4 text-blue-600'>Select User</h2>
            <div className='users-list'>
              {users.map((user) => (
                <div
                  key={user.id}
                  className='user-tile bg-white text-black p-2 rounded mb-2 border-2 border-transparent hover:border-blue-600   cursor-pointer  duration-300'
                  onClick={() => handleUserClick(user.id)}
                >
                  <i className="ri-user-6-fill text-black text-xl"></i>
                  <span className='font-normal ml-4 text-md'>{user.name}</span>
                </div>
              ))}
            </div>
            <button
              className='mt-4 p-2 bg-blue-600 border-1 rounded-lg border-transparent hover:border-white text-white  duration-300'
              onClick={() => setIsModalOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}


    </main>
  );
};

export default Projects;
