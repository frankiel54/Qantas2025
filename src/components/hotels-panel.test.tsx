import { render, screen } from "@testing-library/react";
import HotelsPanel from "./hotels-panel";
import userEvent from "@testing-library/user-event";
import { HotelResult } from "@/mocks/data";

describe("HotelsPanel", () => {
  const results: HotelResult[] = [
    {
      id: "cxd650nuyo",
      property: {
        propertyId: "P107801",
        title: "Medium Hotel",
        address: ["7-11 Talavera Rd", "North Ryde"],
        previewImage: {
          url: "https://unsplash.it/145/125/?random",
          caption: "Image of Courtyard by Marriott Sydney-North Ryde",
          imageType: "PRIMARY",
        },
        rating: {
          ratingValue: 4.5,
          ratingType: "self",
        },
      },
      offer: {
        promotion: {
          title: "Exclusive Deal",
          type: "MEMBER",
        },
        name: "Deluxe Balcony Room",
        displayPrice: {
          amount: 200.0,
          currency: "AUD",
        },
        savings: {
          amount: 30.0,
          currency: "AUD",
        },
        cancellationOption: {
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    },
    {
      id: "mesq6mggyn",
      property: {
        propertyId: "P107802",
        title: "Expensive Hotel",
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
          amount: 300.0,
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
    },
    {
      id: "xbtlihs45t",
      property: {
        propertyId: "P107803",
        title: "Cheapest Hotel",
        address: ["389 Pitt St", "Sydney"],
        previewImage: {
          url: "https://unsplash.it/145/125/?random",
          caption: "Image of property",
          imageType: "PRIMARY",
        },
        rating: {
          ratingValue: 4,
          ratingType: "star",
        },
      },
      offer: {
        promotion: {
          title: "Red Hot",
          type: "CAMPAIGN",
        },
        name: "Deluxe King Room",
        displayPrice: {
          amount: 100.0,
          currency: "AUD",
        },
        savings: null,
        cancellationOption: {
          cancellationType: "NOT_REFUNDABLE",
        },
      },
    },
  ];

  it("should render hotel cards and hotel count", () => {
    render(<HotelsPanel results={results} city={"Sydney"} />);

    expect(screen.getByText("Cheapest Hotel")).toBeVisible();
    expect(screen.getByText("Medium Hotel")).toBeVisible();
    expect(screen.getByText("Expensive Hotel")).toBeVisible();
    expect(
      screen.getByText(
        (_, element) => element?.textContent === "3 hotels in Sydney"
      )
    ).toBeVisible();
  });

  it("should render hotel cards in ascending order by default", () => {
    render(<HotelsPanel results={results} city={"Sydney"} />);
    const priceLowest = screen.getByText("100");
    const priceMiddle = screen.getByText("200");
    const priceHighest = screen.getByText("300");

    const cheapestHotel = screen.getByText("Cheapest Hotel");
    const mediumHotel = screen.getByText("Medium Hotel");
    const expensiveHotel = screen.getByText("Expensive Hotel");

    expect(priceLowest.compareDocumentPosition(priceMiddle)).toBe(4);
    expect(priceMiddle.compareDocumentPosition(priceHighest)).toBe(4);
    expect(priceLowest.compareDocumentPosition(priceHighest)).toBe(4);

    expect(cheapestHotel.compareDocumentPosition(mediumHotel)).toBe(4);
    expect(mediumHotel.compareDocumentPosition(expensiveHotel)).toBe(4);
    expect(cheapestHotel.compareDocumentPosition(expensiveHotel)).toBe(4);
  });

  it("should render hotel cards in descending order after selection", async () => {
    render(<HotelsPanel results={results} city={"Sydney"} />);

    await userEvent.selectOptions(screen.getByLabelText("Sort By:"), "-1");

    const priceLowest = screen.getByText("100");
    const priceMiddle = screen.getByText("200");
    const priceHighest = screen.getByText("300");

    const cheapestHotel = screen.getByText("Cheapest Hotel");
    const mediumHotel = screen.getByText("Medium Hotel");
    const expensiveHotel = screen.getByText("Expensive Hotel");

    expect(priceHighest.compareDocumentPosition(priceMiddle)).toBe(4);
    expect(priceMiddle.compareDocumentPosition(priceLowest)).toBe(4);
    expect(priceHighest.compareDocumentPosition(priceLowest)).toBe(4);

    expect(expensiveHotel.compareDocumentPosition(mediumHotel)).toBe(4);
    expect(mediumHotel.compareDocumentPosition(cheapestHotel)).toBe(4);
    expect(expensiveHotel.compareDocumentPosition(cheapestHotel)).toBe(4);
  });
});
