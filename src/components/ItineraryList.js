// components/ItineraryList.js
import React from 'react';

const ItineraryList = ({ itineraries }) => {
  return (
    <div>
      <h2>Itineraries</h2>
      <ul>
        {itineraries.map((itinerary, index) => (
          <li key={index}>
            {itinerary.name} - {itinerary.destinations.length} destinations
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItineraryList;
