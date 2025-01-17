import React, { useState } from 'react';
import { BooksData } from '../Data/Books';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons
import Navbar from '../components/Navbar';

function NewBooks() {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const months = [
    'January 2025', 'February 2025'
  ];

  const booksPerPage = window.innerWidth < 768 ? 1 : 3; // Adjust books per page based on screen size
  const totalBooks = BooksData.length;

  const filteredBooks =
    selectedMonth === ''
      ? BooksData
      : BooksData.filter((book) => book.ReleaseDate.includes(selectedMonth));

  const handleNext = () => {
    if (currentIndex + booksPerPage < filteredBooks.length) {
      setCurrentIndex(currentIndex + booksPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex - booksPerPage >= 0) {
      setCurrentIndex(currentIndex - booksPerPage);
    }
  };

  return (
    <div className="Home-screen relative w-screen h-screen p-6 bg-gray-100">
      <Navbar />
      {/* Dropdown for Months */}
      <div className="mb-6 mt-12">
        <label htmlFor="month" className="block text-lg font-semibold text-gray-700 mb-2">
          Select a Month
        </label>
        <select
          id="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="block w-full p-2 border rounded-md bg-white shadow-sm"
        >
          <option value="">-- All Months --</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      {/* Book Slider */}
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300"
            style={{
              transform: `translateX(-${currentIndex * (100 / booksPerPage)}%)`,
            }}
          >
            {filteredBooks.map((book, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full md:w-1/3 p-4"
                style={{ flexBasis: `${100 / booksPerPage}%` }}
              >
                <div className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={book.Image}
                    alt={book.Name}
                    className="w-full h-60 object-cover rounded-md mb-4 md:h-[50vh]"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {book.Name}
                  </h3>
                  <p className="text-gray-600 mb-4">{book.ReleaseDate}</p>
                  <p className="text-gray-600 mb-4 font-bold">Book Id : {book.BookId}</p>
                  <div className="flex flex-col gap-2 md:flex-row md:justify-between">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                      onClick={() => {
                        alert("Book issued");
                      }}
                    >
                      Issue
                    </button>
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
                      onClick={() => {
                        alert("Book returned");
                      }}
                    >
                      Return
                    </button>
                    <button
                      className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                      onClick={() => {
                        alert("Book details");
                      }}
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Navigation Icons */}
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + booksPerPage >= filteredBooks.length}
            className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewBooks;
