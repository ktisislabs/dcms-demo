import React, { useState } from 'react';
import Navbar from '../components/Navbar';

function BookreqRet() {
  const [formData, setFormData] = useState({
    bookName: '',
    authorName: '',
    bookId: '',
    action: 'request', // Default action is 'request'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Action: ${formData.action}\nBook Name: ${formData.bookName}\nAuthor Name: ${formData.authorName}\nBook ID: ${formData.bookId}`
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">

    <Navbar />
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6">
          Request or Return a Book
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="bookName"
              className="block text-gray-700 font-medium mb-2"
            >
              Book Name
            </label>
            <input
              type="text"
              id="bookName"
              name="bookName"
              value={formData.bookName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the book name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="authorName"
              className="block text-gray-700 font-medium mb-2"
            >
              Author Name
            </label>
            <input
              type="text"
              id="authorName"
              name="authorName"
              value={formData.authorName}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the author name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="bookId"
              className="block text-gray-700 font-medium mb-2"
            >
              Book ID
            </label>
            <input
              type="text"
              id="bookId"
              name="bookId"
              value={formData.bookId}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the book ID"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="action"
              className="block text-gray-700 font-medium mb-2"
            >
              Action
            </label>
            <select
              id="action"
              name="action"
              value={formData.action}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="request">Request</option>
              <option value="return">Return</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookreqRet;
