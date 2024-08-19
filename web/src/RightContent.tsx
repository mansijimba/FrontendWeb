import React from 'react';

const RightContent: React.FC = () => {
  return (
    <div className="grid gap-6 p-4 bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Manage Users</h2>
        <p className="text-gray-700">Here you can add, update, or delete users.</p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Add Products</h2>
        <p className="text-gray-700">Here you can add new products to the store.</p>
      </div>
    </div>
  );
};

export default RightContent;
