import React from 'react';
import ReviewDetails from './ReviewDetails';

function ReviewList(props) {
  return (
    <ul className="ReviewList">
      {props.reviews.map(review => (
        <li key={review.id}>
          <ReviewDetails {...review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewList;
