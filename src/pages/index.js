// pages/index.js
import Head from 'next/head';
import { useState } from 'react';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import items from '../items';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  // Function to filter items based on search.
  const searchItems = (items, term) => {
    if (!term) {
      return items;
    }

    // Use regex for flexible searching, escape special characters first for safety.
    const escapedTerm = term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedTerm, 'i'); // 'i' for case insensitive

    return items.filter(item => regex.test(item.title) || regex.test(item.description) || regex.test(item.code));
  };

  // Filter items based on search term.
  const visibleItems = searchItems(items, searchTerm);

  return (
    <div className="container mx-auto px-4">
      <Head>
        <title>Understanding Syntax</title>
      </Head>

      <SearchBar onSearch={handleSearch} />

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleItems.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            code={item.code}
            description={item.description}
          />
        ))}
      </main>
    </div>
  );
}
