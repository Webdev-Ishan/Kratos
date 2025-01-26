import React, { useContext, useState } from 'react';
import Homebg from '../assets/Homebg.jpg';
import { UserContext } from '../Context/user.context.jsx';
import axiosInstance from '../Config/axios';

const Home = () => {
  const { user } = useContext(UserContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle project creation logic here
    axiosInstance.post('/projects/createproject', { name: projectName })
    .then((response) => {
      console.log(response.data);
      handleCloseModal();
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='w-full h-screen bg-cover bg-center text-white bg-black'>
      <main className='p-4'>
        <div className='projects'>
          <button
            className='project p-1 w-12 border-white border-2 hover:border-blue-500 duration-500 rounded-md'
            onClick={handleOpenModal}
          >
            <i className="ri-add-large-line text-yellow-500"></i>
          </button>
          <h1 className='mt-3 text-2xl'>New Project</h1>
        </div>
      </main>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Homebg})` }}>
          <div className='bg-black border-2 border-white p-6 rounded-lg shadow-lg w-full max-w-md'>
            <h2 className='text-2xl font-mono text-green-500 mb-4'>Create Project ...</h2>
            <form onSubmit={handleSubmit}>
              <div className='mb-4'>
                <label className='block text-md font-normal mb-2 ' htmlFor='projectName'>Project Name</label>
                <input
                  type='text'
                  id='projectName'
                  className='w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500'
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  required
                />
              </div>
              <div className='flex justify-end'>
                <button
                  type='button'
                  className='mr-2 p-2 rounded bg-red-400 hover:bg-blue-600 transition-colors duration-500'
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
                <button
                  type='submit'
                  className='p-2 rounded bg-green-500 text-black hover:text-white hover:bg-blue-600 transition-colors duration-500'
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
