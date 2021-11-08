// FUNCTION
export const rangeInt = (start: number, length: number): number[] => {
  return Array.from({ length }, (_, i) => start + i);
};
