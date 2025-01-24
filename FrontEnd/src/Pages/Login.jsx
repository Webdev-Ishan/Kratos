import React,{useState, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from '../Config/axios.js';
import { UserContext } from '../Context/user.context.jsx';

const Login = () => {


const {setUser} = useContext(UserContext);

  const navigate = useNavigate();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const submithandler = async (e) => {

    e.preventDefault();


    axios.post('/users/loginuser', {email,password})
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


    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-black border-2 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl text-green-400 font-mono mb-6 text-center">Login...</h2>
        <form onSubmit={submithandler}>
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
            className="w-full p-3 rounded text-white bg-green-600 hover:bg-blue-700 transition-colors duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account? <Link to="/register" className="text-green-400 hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
