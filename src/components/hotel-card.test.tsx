import HotelCard from "./hotel-card";
import { render, screen } from "@testing-library/react";

describe("HotelCard", () => {
  it("should render the correct information", () => {
    const result = {
      id: "mesq6mggyn",
      property: {
        propertyId: "P107802",
        title: "Primus Hotel Sydney",
        address: ["339 Pitt St", "Sydney"],
        previewImage: {
          url: "https://unsplash.it/145/125/?random",
          caption: "Image of Primus Hotel Sydney",
          imageType: "PRIMARY",
        },
        rating: {
          ratingValue: 5,
          ratingType: "self",
        },
      },
      offer: {
        promotion: {
          title: "Exclusive Deal",
          type: "MEMBER",
        },
        name: "Deluxe King",
        displayPrice: {
          amount: 375.0,
          currency: "AUD",
        },
        savings: {
          amount: 28.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "FREE_CANCELLATION",
        },
      },
    };

    render(<HotelCard result={result} />);

    expect(screen.getByText("Primus Hotel Sydney")).toBeVisible();
    expect(screen.getByText("339 Pitt St, Sydney")).toBeVisible();
    expect(screen.getByText("Deluxe King")).toBeVisible();
    expect(screen.getByText("Free cancellation")).toBeVisible();
    expect(screen.getByText("Exclusive Deal")).toBeVisible();
    expect(
      screen.getByText(
        (_, element) => element?.textContent === "1 night total (AUD)"
      )
    ).toBeVisible();
    expect(
      screen.getByText((_, element) => element?.textContent === "$375")
    ).toBeVisible();
    expect(screen.getByText("Save $28~")).toBeVisible();
  });
});
