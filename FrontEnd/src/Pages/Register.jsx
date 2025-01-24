import React, {useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Config/axios.js';
import { UserContext } from '../Context/user.context.jsx';

const Register = () => {


  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submithandler = async (e) => {

    e.preventDefault();


    axios.post('/users/register', {email,password})
    .then((response) => {
localStorage.setItem('token', response.data.token);
setUser(response.data.user);

      console.log(response.data);
      navigate('/');

    })
    .catch((error) => {
      console.log(error);
    });
  }



  return (
    <div className="min-h-screen p-3 flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-black p-8 rounded-lg border-2 shadow-lg w-full max-w-md">
        <h2 className="text-4xl text-green-400 font-mono mb-6 text-center">Register...</h2>
        <form  onSubmit={submithandler}>
          <div className="mb-4">
            <label className="block text-sm font-normal mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-normal mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full p-3 rounded bg-green-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <Link to="/login" className="text-green-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;