import React from 'react';

const Popup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" 
      onClick={onClose}
    >
      <div 
        className="relative bg-white rounded-lg shadow-lg w-[40rem] p-6 " 
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          className="absolute top-2 right-4 text-4xl cursor-pointer hover:text-red-500 "
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Join the Waitlist</h2>
        <form className="space-y-4">
          <label className="block text-sm font-medium text-gray-700">
            Email *
            <input 
              type="email" 
              placeholder="Work Email" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Full Name *
            <input 
              type="text" 
              placeholder="Your Full name goes here" 
              required 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
            <input 
              type="tel" 
              placeholder="Get me there quickly!" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
            <input 
              type="text" 
              placeholder="Your company name" 
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button 
            type="submit" 
            className=" bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
