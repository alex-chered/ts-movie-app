export const computeTotalPages = (totalItems: number, perPage: number): number => {
  return Math.ceil(totalItems / perPage);
};
