// import { data } from "@/mocks/data";

import { Price } from "@/mocks/data";

interface PriceDisplayProps {
  displayPrice: Price;
  savings: Price | null;
}

export default async function PriceDisplay({
  displayPrice,
  savings,
}: PriceDisplayProps) {
  return (
    <div className="text-right">
      <div>1 night total {displayPrice.currency}</div>
      <div>
        <span>$</span>
        <span>{displayPrice.amount}</span>
      </div>
      {savings && <div>Save ${savings.amount}~</div>}
      {/* <div>{savings.currency}</div> */}
    </div>
  );
}
