import { HotelResult } from "@/mocks/data";
import HotelDisplay from "./hotel-display";
import PriceDisplay from "./price-display";
import Image from "next/image";

export default async function HotelCard({ result }: { result: HotelResult }) {
  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-3">
        <Image
          src={result.property.previewImage.url}
          alt={result.property.previewImage.caption}
          width={200}
          height={200}
          // style={{ height: 'auto' }}
        />
      </div>
      <div className="col-span-6">
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
  );
}
