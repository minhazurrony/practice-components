"use client";

import React, { useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import { Tooltip } from "../components";

const tooltipMessages = [
  "poor",
  "noting special",
  "average",
  "good",
  "excellent",
];

export default function StarRating() {
  const stars = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleRatingClick = (star: number) => {
    if (star === rating) {
      setRating(star - 1);
    } else {
      setRating(star);
    }
    setHoveredRating(0);
  };

  const renderStar = (star: number, idx: number) => {
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
        <Tooltip key={star} content={tooltipMessages[idx]}>
          <MdOutlineStarBorder
            onClick={() => handleRatingClick(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            size={"2em"}
            className={`${hoveredRating >= star ? "cursor-pointer text-green-300" : " hover:text-green-300"}`}
          />
        </Tooltip>
      );
    }
  };

  return (
    <div className="flex h-2/6 w-3/6 flex-col items-center justify-center shadow-lg">
      <div className="flex">
        {stars.map((star, idx) => {
          return renderStar(star, idx);
        })}
      </div>

      <p className="mt-6 capitalize">
        <span className="font-bold">rating:</span>{" "}
        {rating > 0 ? tooltipMessages[rating - 1] : "not given"}
      </p>
    </div>
  );
}
