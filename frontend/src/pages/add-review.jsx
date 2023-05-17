import React from 'react'
import { createReview } from '../services/review'
import { useAuth } from '../hooks'

import { TextField } from '@mui/material'

export default function AddReview({ filteredReviews, userId2, reviewData, setReviewData, refresh }) {
  const handleSubmit = (event) => {
    event.preventDefault()

    // Send a POST request to the server to add the new review
    createReview(reviewData)
    console.log(reviewData)
    refresh().catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className="mt-4">
      <h2 className="text-2xl font-bold">Add a Review</h2>
      {userId2 === null ? (
        <p>Please sign in to leave a review and share your experience with our Aryrvedic Herbal products!</p>
      ) : filteredReviews.some((review) => review.user._id === userId2) ? (
        <p>You have already submitted a review!</p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="mb-4">
            <label className="block font-medium">Review Text:</label>
            <TextField multiline rows={4} variant="outlined" className="w-full mt-2" value={reviewData.text} onChange={(event) => setReviewData({ ...reviewData, text: event.target.value })} />
          </div>
          <div className="mb-4">
            <label className="block font-medium">Rating:</label>
            <TextField type="number" inputProps={{ min: '1', max: '5' }} variant="outlined" className="w-full mt-2" value={reviewData.rating} onChange={(event) => setReviewData({ ...reviewData, rating: event.target.value })} />
          </div>
          <button type="submit" className="flex  text-white bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded">
            Submit Review
          </button>
        </form>
      )}
    </div>
  )
}
