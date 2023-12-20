// components/DestinationList.js
import React from 'react';

const DestinationList = ({ destinations }) => {
  return (
    <ul>
      {destinations.map((destination) => (
        <li key={destination.id}>
          {destination.name} - Rating: {destination.rating} ({destination.reviews} reviews)
        </li>
      ))}
    </ul>
  );
};

export default DestinationList;
