// pages/index.js
import React from "react";
import DestinationExplorer from "./components/DestinationExplorer";
import ReviewSystem from "./components/ReviewSystem";
import ItineraryPlanner from "./components/ItineraryPlanner";
import ExistingItineraries from "./components/ExistingItineraries";
import './App.css'

const App = () => {
  // Dummy data for reviews and itineraries
  const dummyReviewData = [
    { id: 1, destinationName: "Mumbai", userName: "User1", rating: 4, review: "Nice place" },
    { id: 2, destinationName: "Delhi", userName: "User2", rating: 3.5, review: "Good experience" },
    // Add more dummy review data as needed
  ];

  const dummyItineraryData = [
    { id: 1, name: "Trip 1", reviews: 10, rating: 4 },
    { id: 2, name: "Trip 2", reviews: 8, rating: 3.8 },
    // Add more dummy itinerary data as needed
  ];

  return (
    <div>
      <h1>Destination Explorer</h1>
      <DestinationExplorer />
      <h1>Review System</h1>
      <ReviewSystem reviews={dummyReviewData} />
      <h1>Itinerary Planner</h1>
      <ItineraryPlanner />
      <h1>Existing Itineraries</h1>
      <ExistingItineraries itineraries={dummyItineraryData} />
    </div>
  );
};

export default App;
