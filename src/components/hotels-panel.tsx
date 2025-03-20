"use client";

import HotelCard from "./hotel-card";
import { HotelResult } from "@/mocks/data";
import { useState } from "react";

interface HotelsPanel {
  results: HotelResult[];
  city: string;
}

export default function HotelsPanel({ results, city }: HotelsPanel) {
  const [sortOrder, setSortOrder] = useState(1);
  const sortedResults = results.sort((a, b) => {
    return (
      sortOrder * (a.offer.displayPrice.amount - b.offer.displayPrice.amount)
    );
  });
  return (
    <>
      <div className="flex justify-between mb-5">
        <div className="font-bold">
          {results.length} <span className="italic font-normal">hotels in</span>{" "}
          {city}
        </div>
        <div>
          <label htmlFor="sort-select" className="mr-1">
            Sort By:
          </label>
          <select
            name="sort-by"
            id="sort-select"
            onClick={(e) => setSortOrder(parseInt(e.currentTarget.value))}
          >
            <option value={"1"}>Price low-high</option>
            <option value={"-1"}>Price high-low</option>
          </select>
        </div>
      </div>
      <div>
        {sortedResults.map((result, index) => (
          <HotelCard
            key={result.id}
            result={result}
            showTopBorder={index === 0}
          />
        ))}
      </div>
    </>
  );
}
