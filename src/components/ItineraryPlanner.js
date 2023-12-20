// components/ItineraryPlanner.js
import React, { useState } from 'react';
import ItineraryForm from './ItineraryForm';
import ItineraryList from './ItineraryList';

const ItineraryPlanner = () => {
  const [itineraries, setItineraries] = useState([]);

  const handleSaveItinerary = (newItinerary) => {
    setItineraries([...itineraries, newItinerary]);
  };

  return (
    <div>
      <ItineraryForm onSave={handleSaveItinerary} />
      <ItineraryList itineraries={itineraries} />
    </div>
  );
};

export default ItineraryPlanner;
