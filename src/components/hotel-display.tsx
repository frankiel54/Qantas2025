"use client";

import { CancellationOption, Rating } from "@/mocks/data";
import HotelRating from "./hotel-rating/hotel-rating";
import { useState } from "react";

interface HotelDisplayProps {
  name: string;
  title: string;
  address: string[];
  rating: Rating;
  cancellationOption: CancellationOption;
}

export default function HotelDisplay({
  name,
  title,
  address,
  rating,
  cancellationOption,
}: HotelDisplayProps) {
  
  const [shouldTruncate, setShouldTruncate] = useState(true);

  return (
    <div className="text-left flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-row items-center">
          <div
            onClick={() => {
              setShouldTruncate(!shouldTruncate);
            }}
            className={`text-2xl cursor-pointer ${shouldTruncate ? "truncate" : ""}`}
          >
            {title}
          </div>
          <div className="ml-2">
            <HotelRating rating={rating} />
          </div>
        </div>
        <div className="text-gray-400">{address.join(", ")}</div>
        <div className="pt-4 text-red-600 underline">{name}</div>
      </div>
      {cancellationOption.cancellationType === "FREE_CANCELLATION" && (
        <div className=" text-green-600">Free cancellation</div>
      )}
    </div>
  );
}
