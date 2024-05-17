import React from 'react';
import Sidebar from './Sidebar';
import Login from './Login';

const AuthContainer: React.FC = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-lg max md:flex-row md:flex-1 lg:max-w-screen-md">
      <Sidebar />
      <div className="p-5 bg-white md:flex-1">
        <h3 className="my-4 text-2xl font-semibold text-gray-700">Account Login</h3>
        <Login />
      </div>
    </div>
  );
};

export default AuthContainer;
