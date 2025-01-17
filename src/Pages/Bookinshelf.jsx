import React from 'react';
import { ShelfData } from '../Data/BookShelf';
import Navbar from '../components/Navbar';

function Bookinshelf() {
  return (
    <div className="p-6">

     <Navbar/>


      <h1 className="text-2xl font-bold text-center mb-6">Books in Shelf</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white">
              <th className="px-6 py-3 text-left text-sm font-medium">Book ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Title</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Author</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Publisher</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Language</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Pages</th>
            </tr>
          </thead>
          <tbody>
            {ShelfData.map((book, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                } hover:bg-blue-100`}
              >
                <td className="px-6 py-3 text-sm text-gray-800">{book.BookId}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{book.Title}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{book.Author}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{book.Publisher}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{book.Language}</td>
                <td className="px-6 py-3 text-sm text-gray-800">{book.Pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Bookinshelf;
