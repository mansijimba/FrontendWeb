import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './dashboard.css'; // Import your CSS file

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'users' | 'products'>('users');
  const [users, setUsers] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    address: '',
    contactNumber: ''
  });
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    imageUrl: '',
    price: '',
    quantity: ''
  });
  const [editingProductId, setEditingProductId] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUsers();
    fetchProducts();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('http://localhost:8080/user');
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/products');
      setProducts(response.data);
    } catch (err) {
      setError('Failed to fetch products');
    }
  };

  const handleUserSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/user', newUser);
      fetchUsers(); // Refresh the user list after adding
      setNewUser({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        address: '',
        contactNumber: ''
      });
    } catch (err) {
      setError('Failed to add user');
    }
  };

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingProductId) {
        await axios.put(`http://localhost:8080/api/products/${editingProductId}`, newProduct);
      } else {
        await axios.post('http://localhost:8080/api/products', newProduct);
      }
      fetchProducts(); // Refresh the product list after adding
      setNewProduct({
        name: '',
        description: '',
        imageUrl: '',
        price: '',
        quantity: ''
      });
      setEditingProductId(null);
    } catch (err) {
      setError(editingProductId ? 'Failed to update product' : 'Failed to add product');
    }
  };

  const handleEditProduct = (product: any) => {
    setEditingProductId(product.id);
    setNewProduct({
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: product.quantity
    });
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts(); // Refresh the product list after deleting
    } catch (err) {
      setError('Failed to delete product');
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <h2 className="text-xl mb-4">Dashboard</h2>
        <button
          onClick={() => setActiveTab('users')}
          className={`block w-full py-2 px-4 mb-2 text-left rounded-md ${
            activeTab === 'users' ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Add User
        </button>
        <button
          onClick={() => setActiveTab('products')}
          className={`block w-full py-2 px-4 text-left rounded-md ${
            activeTab === 'products' ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-700'
          }`}
        >
          Add Products
        </button>
      </div>
      <div className="main-content">
        <header className="header mb-4">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        </header>
        <main className="flex flex-col h-full">
          {error && <p className="text-red-500 mb-4">{error}</p>}
          {activeTab === 'users' ? (
            <div className="form-container">
              <h2 className="text-lg font-semibold mb-4">Add User</h2>
              <form onSubmit={handleUserSubmit} className="space-y-4">
                {/* User Form Fields */}
                <div className="form-group">
                  <label htmlFor="firstName" className="block text-gray-700">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    value={newUser.firstName}
                    onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="block text-gray-700">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    value={newUser.lastName}
                    onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="username" className="block text-gray-700">Username</label>
                  <input
                    type="text"
                    id="username"
                    value={newUser.username}
                    onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={newUser.email}
                    onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password" className="block text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    value={newUser.password}
                    onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="address" className="block text-gray-700">Address</label>
                  <input
                    type="text"
                    id="address"
                    value={newUser.address}
                    onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contactNumber" className="block text-gray-700">Contact Number</label>
                  <input
                    type="tel"
                    id="contactNumber"
                    value={newUser.contactNumber}
                    onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
                >
                  Add User
                </button>
              </form>
              <h2 className="text-lg font-semibold mt-8 mb-4">User List</h2>
              <table>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.contactNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="form-container">
              <h2 className="text-lg font-semibold mb-4">
                {editingProductId ? 'Update Product' : 'Add Product'}
              </h2>
              <form onSubmit={handleProductSubmit} className="space-y-4">
                {/* Product Form Fields */}
                <div className="form-group">
                  <label htmlFor="name" className="block text-gray-700">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="description" className="block text-gray-700">Description</label>
                  <textarea
                    id="description"
                    value={newProduct.description}
                    onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="imageUrl" className="block text-gray-700">Image URL</label>
                  <input
                    type="text"
                    id="imageUrl"
                    value={newProduct.imageUrl}
                    onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="price" className="block text-gray-700">Price</label>
                  <input
                    type="number"
                    id="price"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                  <input
                    type="number"
                    id="quantity"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700"
                >
                  {editingProductId ? 'Update Product' : 'Add Product'}
                </button>
              </form>
              <h2 className="text-lg font-semibold mt-8 mb-4">Product List</h2>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Image URL</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td>{product.name}</td>
                      <td>{product.description}</td>
                      <td>{product.imageUrl}</td>
                      <td>{product.price}</td>
                      <td>{product.quantity}</td>
                      <td>
                      <div className="button-container">
                            <button
                              onClick={() => handleEditProduct(product)}
                              className="update-btn"
                            >
                              Update
                            </button>
                            <button
                              onClick={() => handleDeleteProduct(product.id)}
                              className="remove-btn"
                            >
                              Remove
                      
                        </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
