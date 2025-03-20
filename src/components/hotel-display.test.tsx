import { render, screen } from "@testing-library/react";
import HotelDisplay from "./hotel-display";

describe("HotelDisplay", () => {
  it("should render the correct information", () => {
    render(
      <HotelDisplay
        address={["339 Pitt St", "Sydney"]}
        cancellationOption={{
          cancellationType: "FREE_CANCELLATION",
        }}
        name={"Deluxe King"}
        rating={{
          ratingValue: 5,
          ratingType: "self",
        }}
        title="Primus Hotel Sydney"
      />
    );

    expect(screen.getByText("Primus Hotel Sydney")).toBeVisible();
    expect(screen.getByText("339 Pitt St, Sydney")).toBeVisible();
    expect(screen.getByText("Deluxe King")).toBeVisible();
    expect(screen.getByText("Free cancellation")).toBeVisible();

    expect(screen.queryAllByTestId("circle-filled").length).toBe(5);
  });
});
