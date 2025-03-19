import HotelRating from "./hotel-rating";
import {render, screen} from '@testing-library/react'

describe("HotelRating", () => {
  it("should render the correct number of stars", () => {
    render(<HotelRating rating={{ratingType:'self', ratingValue:3}}/>)
    
    expect(screen.getAllByTestId('circle-filled').length).toBe(3);
  });
});
