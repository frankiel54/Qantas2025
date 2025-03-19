import { getRatingArray } from "./get-rating-array";

describe("getRatingArray", () => {
  it("should generate array correctly", () => {
    expect(getRatingArray(3)).toEqual([1, 1, 1, 0, 0]);
  });
});
