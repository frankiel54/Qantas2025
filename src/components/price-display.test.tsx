import { render, screen } from "@testing-library/react";
import PriceDisplay from "./price-display";

describe("PriceDisplay", () => {
  it("should render with price saving", () => {
    render(
      <PriceDisplay
        displayPrice={{
          amount: 375.0,
          currency: "AUD",
        }}
        savings={{
          amount: 28.0,
          currency: "AUD",
        }}
      />
    );

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

  it("should render without price saving", () => {
    render(
      <PriceDisplay
        displayPrice={{
          amount: 375.0,
          currency: "AUD",
        }}
        savings={null}
      />
    );

    expect(
      screen.getByText(
        (_, element) => element?.textContent === "1 night total (AUD)"
      )
    ).toBeVisible();
    expect(
      screen.getByText((_, element) => element?.textContent === "$375")
    ).toBeVisible();
    expect(screen.queryByText("Save", {exact: false})).not.toBeInTheDocument();
  });
});
