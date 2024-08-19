import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-blue-900 text-white">
      <div className="p-4 text-2xl font-bold border-b border-blue-800">Dashboard</div>
      <ul className="mt-6">
        <li className="p-4 hover:bg-blue-800 cursor-pointer">Manage Users</li>
        <li className="p-4 hover:bg-blue-800 cursor-pointer">Add Products</li>
      </ul>
    </div>
  );
};

export default Sidebar;
