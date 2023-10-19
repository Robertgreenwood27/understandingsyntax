// components/SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleSearchChange = (event) => {
    onSearch(event.target.value); // Pass the search input to the parent component.
  };

  return (
    <input
      className="form-input w-full py-4 px-3 border-2 border-white bg-black text-white rounded mb-4 outline-none mt-10"
      type="text"
      placeholder="Search..."
      onChange={handleSearchChange}
      style={{ boxShadow: "none" }} // Remove box-shadow if there's any by default.
    />
  );
};

export default SearchBar;
