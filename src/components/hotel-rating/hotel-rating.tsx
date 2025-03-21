import { Rating } from "@/mocks/data";
import StarFilled from "./icons/star-filled";
import StarUnfilled from "./icons/star-unfilled";
import StarHalf from "./icons/star-half";
import CircleFilled from "./icons/circle-filled";
import CircleHalf from "./icons/circle-half";
import CircleUnfilled from "./icons/circle-unfilled";
import { getRatingArray } from "./util/get-rating-array";

interface HotelRatingProps {
  rating: Rating;
}

export default function HotelRating({ rating }: HotelRatingProps) {
  return (
    <div className="flex">
      {getRatingArray(rating.ratingValue).map((v, i) => {
        if (v === 1)
          return rating.ratingType === "star" ? (
            <StarFilled height={18} fill={"orange"} key={i} />
          ) : (
            <CircleFilled
              height={16}
              fill={"orange"}
              key={i}
              className="mr-0.5"
            />
          );
        else if (v === 0.5)
          return rating.ratingType === "star" ? (
            <StarHalf height={18} fill={"orange"} key={i} />
          ) : (
            <CircleHalf
              height={16}
              fill={"orange"}
              key={i}
              className="mr-0.5"
            />
          );
        else
          return rating.ratingType === "star" ? (
            <StarUnfilled height={18} fill={"gray"} key={i} />
          ) : (
            <CircleUnfilled
              height={16}
              fill={"gray"}
              key={i}
              className="mr-0.5"
            />
          );
      })}
    </div>
  );
}
