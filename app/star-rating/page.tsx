"use client";

import React, { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

export default function StarRating() {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (star: number) => {
    setRating(star);
    setHoveredRating(0);
  };

  const renderStar = (star: number) => {
    if (rating >= star) {
      return (
        <MdOutlineStar
          key={star}
          onClick={() => handleRatingClick(star)}
          size={"2em"}
          className="cursor-pointer text-green-500"
        />
      );
    } else {
      return (
        <MdOutlineStarBorder
          key={star}
          onClick={() => handleRatingClick(star)}
          onMouseOver={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          size={"2em"}
          className={`${hoveredRating >= star ? "cursor-pointer text-green-300" : " hover:text-green-300"}`}
        />
      );
    }
  };

  return (
    <div className="flex h-2/6 w-3/6 items-center justify-center shadow-lg">
      {stars.map((star) => {
        return renderStar(star);
      })}
    </div>
  );
}
