import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter'; // New Component
import items from '../items';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All'); // New state for category filtering

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category) => { // New handler for category changes
    setActiveCategory(category);
  };

  // Function to filter items based on search and category.
  const filterItems = (items, term, category) => {
    let result = items;

    if (term) {
      const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const regex = new RegExp(escapedTerm, 'i');
      result = result.filter(item => regex.test(item.title) || regex.test(item.description) || regex.test(item.code));
    }

    if (category && category !== 'All') { // Category filtering
      result = result.filter(item => item.category === category);
    }

    return result;
  };

  const visibleItems = filterItems(items, searchTerm, activeCategory); // Filter by search term and category

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Understanding Syntax</title>
      </Head>

      <SearchBar onSearch={handleSearch} />
      <CategoryFilter onCategoryChange={handleCategoryChange} />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            code={item.code}
            description={item.description}
            realLifeExample={item.realLifeExample}
            category={item.category} // Pass category here
          />
        ))}
      </main>
    </div>
  );
}
