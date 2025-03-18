// 'use client';

import { Price } from "@/mocks/data";

interface PriceDisplayProps {
  displayPrice: Price;
  savings: Price | null;
}

export default function PriceDisplay({
  displayPrice,
  savings,
}: PriceDisplayProps) {
  // TODO: Maybe fix the final savings not having static spacing if you have time
  return (
    <div className="text-right flex flex-col justify-end h-full pb-4">
      <div className="text-sm mb-1">
        <span className="font-bold ">1</span> night total (
        {displayPrice.currency})
      </div>
      <div className="flex justify-end mb-2">
        <div className="text-xl">$</div>
        <div className="text-4xl">{displayPrice.amount}</div>
      </div>
      {savings && (
        <div className="text-red-600 text-xl">Save ${savings.amount}~</div>
      )}
    </div>
  );
}
