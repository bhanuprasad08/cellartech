// components/DestinationExplorer.js
import React, { useState } from 'react';
import DestinationList from './DestinationList';

const DestinationExplorer = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [destinations, setDestinations] = useState([
    { id: 1, name: 'Mumbai', rating: 4.5, reviews: 120 },
    { id: 2, name: 'Delhi', rating: 4.2, reviews: 90 },
    { id: 3, name: 'Jaipur', rating: 4.8, reviews: 150 },
    { id: 4, name: 'Goa', rating: 4.6, reviews: 110 },
    // Add more dummy destinations as needed
  ]);

  const handleSearch = () => {
    const filteredDestinations = destinations.filter((destination) =>
      destination.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDestinations(filteredDestinations);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <DestinationList destinations={destinations} />
    </div>
  );
};

export default DestinationExplorer;
