export const getRatingArray = (ratingValue: number): number[] => {
    if (ratingValue < 0 || ratingValue > 5) {return []}
    const result = [];
    for (let i = 0; i < 5; i++) {
      if (ratingValue - i === 0.5) {
        result[i] = 0.5;
      } else if (ratingValue - i > 0) {
        result[i] = 1;
      } else {
        result[i] = 0;
      }
    }
    return result;
  };