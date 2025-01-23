import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="min-h-screen p-3 flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-black p-8 rounded-lg border-2 shadow-lg w-full max-w-md">
        <h2 className="text-4xl text-green-400 font-mono mb-6 text-center">Register...</h2>
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