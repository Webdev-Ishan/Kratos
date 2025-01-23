import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from '../Config/axios.js';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-black border-2 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-4xl text-green-400 font-mono mb-6 text-center">Login...</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-normal mb-2" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-normal mb-2" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
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
