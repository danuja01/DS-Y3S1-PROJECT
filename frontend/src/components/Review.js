import React, { useState, useEffect } from "react";
import ReviewDataService from "../services/review/review";

const ReviewList = (props) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    retrieveReviews();
  }, []);

  const retrieveReviews = (page) => {
    ReviewDataService.getAll(page)
      .then((response) => {
        setReviews(response.data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="row">
      {reviews.map((review) => {
        return (
          <div key={review._id}>
            <h2>Reviews</h2>
            <h3>Review title: {review.title}</h3>
            <p>Review description: {review.description}</p>
            <p>Rating: {review.rating}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ReviewList;
