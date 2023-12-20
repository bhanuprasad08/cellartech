// components/ItineraryForm.js
import React, { useState } from 'react';

const ItineraryForm = ({ onSave }) => {
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [selectedDestinations, setSelectedDestinations] = useState([]);

  const handleAddDestination = () => {
    // Implement logic to add selected destination to the list
  };

  const handleSaveClick = () => {
    onSave({
      name,
      startDate,
      destinations: selectedDestinations,
    });
  };

  return (
    <div>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input
        type="date"
        placeholder="Start Date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />
      <button onClick={handleAddDestination}>Add Destination</button>
      <button onClick={handleSaveClick}>Save Itinerary</button>
    </div>
  );
};

export default ItineraryForm;
