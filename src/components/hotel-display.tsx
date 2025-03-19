// 'use client';

import { CancellationOption, Rating } from "@/mocks/data";
import HotelRating from "./hotel-rating/hotel-rating";

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
  return (
    <div className="text-left flex flex-col justify-between h-full">
      <div>
        <div className="flex flex-row items-center">
          <div className="text-2xl truncate">{title}</div>
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
