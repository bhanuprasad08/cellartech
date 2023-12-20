// components/ReviewSystem.js
import React from 'react';

const ReviewSystem = ({ reviews }) => {
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            {review.destinationName} - Rating: {review.rating} by {review.userName}
            <p>{review.review}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewSystem;
