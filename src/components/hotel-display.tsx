import { CancellationOption, Rating } from "@/mocks/data";

interface HotelDisplayProps {
    name: string;
    title: string;
    address: string[];
    rating: Rating;
    cancellationOption: CancellationOption;
}

export default async function HotelDisplay({
  name,
  title,
  address,
  //rating,
  cancellationOption,
}: HotelDisplayProps) {
  return (
    <div className="text-left">
      <div>{title}</div>
      <div>{address[0]}</div>
      <div>{name}</div>
      {cancellationOption.cancellationType === "FREE_CANCELLATION" && (
        <div>Free cancellation</div>
      )}
    </div>
  );
}
