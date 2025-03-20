import { getRatingArray } from "./get-rating-array";

describe("getRatingArray", () => {
  it.each([
    { rating: 0, resultArray: [0, 0, 0, 0, 0] },
    { rating: 0.5, resultArray: [0.5, 0, 0, 0, 0] },
    { rating: 2.5, resultArray: [1, 1, 0.5, 0, 0] },
    { rating: 3, resultArray: [1, 1, 1, 0, 0] },
    { rating: 4, resultArray: [1, 1, 1, 1, 0] },
    { rating: 4.5, resultArray: [1, 1, 1, 1, 0.5] },
    { rating: 5, resultArray: [1, 1, 1, 1, 1] }
  ])("should generate array $resultArray when rating is $rating", ({rating, resultArray}) => {
    expect(getRatingArray(rating)).toEqual(resultArray);
  });

  it.each([
    { rating: -1, resultArray: [] },
    { rating: 6, resultArray: [] },
    { rating: 5.5, resultArray: [] },
  ])("should generate empty array on invalid rating $rating", ({rating, resultArray}) => {
    expect(getRatingArray(rating)).toEqual(resultArray);
  });
});
