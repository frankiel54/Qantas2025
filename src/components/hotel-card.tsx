import { HotelResult } from "@/mocks/data";
import HotelDisplay from "./hotel-display";
import PriceDisplay from "./price-display";
import Image from "next/image";

interface HotelCardProps {
  result: HotelResult;
  showTopBorder?: boolean;
}

export default function HotelCard({
  result,
  showTopBorder = false,
}: HotelCardProps) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3 py-4">
        <div className="p-1 text-red-600 absolute bg-white mt-2.5 border-l border-gray-300">
          {result.offer.promotion.title}
        </div>
        <Image
          src={result.property.previewImage.url}
          alt={result.property.previewImage.caption}
          width={200}
          height={200}
        />
      </div>
      <div
        className={`col-span-9 grid grid-cols-9 border-b border-gray-400 ${
          showTopBorder ? "border-t" : ""
        }`}
      >
        <div className="col-span-6 p-2">
          <HotelDisplay
            address={result.property.address}
            cancellationOption={result.offer.cancellationOption}
            name={result.offer.name}
            rating={result.property.rating}
            title={result.property.title}
          />
        </div>
        <div className="col-span-3">
          <PriceDisplay
            displayPrice={result.offer.displayPrice}
            savings={result.offer.savings}
          />
        </div>
      </div>
    </div>
  );
}
