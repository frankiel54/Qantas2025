import HotelRating from "./hotel-rating";
import { render, screen } from "@testing-library/react";

describe("HotelRating", () => {
  it.each([
    {
      ratingType: "self",
      ratingValue: 3,
      circleFilled: 3,
      circleHalf: 0,
      circleUnfilled: 2,
      starFilled: 0,
      starHalf: 0,
      starUnfilled: 0,
    },
    {
      ratingType: "self",
      ratingValue: 2.5,
      circleFilled: 2,
      circleHalf: 1,
      circleUnfilled: 2,
      starFilled: 0,
      starHalf: 0,
      starUnfilled: 0,
    },
    {
      ratingType: "star",
      ratingValue: 1,
      circleFilled: 0,
      circleHalf: 0,
      circleUnfilled: 0,
      starFilled: 1,
      starHalf: 0,
      starUnfilled: 4,
    },
    {
      ratingType: "star",
      ratingValue: 4.5,
      circleFilled: 0,
      circleHalf: 0,
      circleUnfilled: 0,
      starFilled: 4,
      starHalf: 1,
      starUnfilled: 0,
    },
    {
      ratingType: "self",
      ratingValue: 6,
      circleFilled: 0,
      circleHalf: 0,
      circleUnfilled: 0,
      starFilled: 0,
      starHalf: 0,
      starUnfilled: 0,
    },
  ])(
    "should render the correct number of stars",
    ({
      ratingType,
      ratingValue,
      circleFilled,
      circleHalf,
      circleUnfilled,
      starFilled,
      starHalf,
      starUnfilled,
    }) => {
      render(
        <HotelRating
          rating={{ ratingType: ratingType as "star" | "self", ratingValue }}
        />
      );

      expect(screen.queryAllByTestId("circle-filled").length).toBe(
        circleFilled
      );
      expect(screen.queryAllByTestId("circle-half").length).toBe(circleHalf);
      expect(screen.queryAllByTestId("circle-unfilled").length).toBe(
        circleUnfilled
      );

      expect(screen.queryAllByTestId("star-filled").length).toBe(starFilled);
      expect(screen.queryAllByTestId("star-half").length).toBe(starHalf);
      expect(screen.queryAllByTestId("star-unfilled").length).toBe(
        starUnfilled
      );
    }
  );
});
