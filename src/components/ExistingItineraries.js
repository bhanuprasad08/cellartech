// components/ExistingItineraries.js
import React from 'react';

const ExistingItineraries = ({ itineraries }) => {
  return (
    <div>
      <h2>Existing Itineraries</h2>
      <ul>
        {itineraries.map((itinerary, index) => (
          <li key={index}>
            {itinerary.name} - {itinerary.reviews} reviews - Rating: {itinerary.rating}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExistingItineraries;
