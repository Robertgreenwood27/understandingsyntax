// components/CategoryFilter.js
import React from 'react';

const CategoryFilter = ({ onCategoryChange }) => {
  const categories = ['All', 'Data Types', 'Control Structures', 'Loops and Iteration', 'Functions', 'Objects and Prototypes', /* other categories */];

  return (
    <div className="flex flex-col items-center justify-center my-4">
      <h2 className="text-lg md:text-xl lg:text-2xl text-white mb-2">Select a category:</h2>
      <select 
        className="p-2 text-black bg-white rounded shadow appearance-none cursor-pointer" 
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
