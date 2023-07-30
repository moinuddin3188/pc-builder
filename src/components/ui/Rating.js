import React from "react";

export default function Rating({rating}) {
  return (
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-4"
        className={`mask mask-star-2 ${rating >= 1 ? "bg-green-500" : "bg-green-200"} mr-1`}
        disabled
      />
      <input
        type="radio"
        name="rating-4"
        className={`mask mask-star-2 ${rating >= 2 ? "bg-green-500" : "bg-green-200"} mr-1`}
        disabled
      />
      <input
        type="radio"
        name="rating-4"
        className={`mask mask-star-2 ${rating >= 3 ? "bg-green-500" : "bg-green-200"} mr-1`}
        disabled
      />
      <input
        type="radio"
        name="rating-4"
        className={`mask mask-star-2 ${rating >= 4 ? "bg-green-500" : "bg-green-200"} mr-1`}
        disabled
      />
      <input
        type="radio"
        name="rating-4"
        className={`mask mask-star-2 ${rating > 4.5 ? "bg-green-500" : "bg-green-200"} mr-1`}
        disabled
      />
    </div>
  );
}
