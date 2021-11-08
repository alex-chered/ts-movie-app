// data
import { IDS } from 'data/mock-ids';

// FUNCTION
export const getIdsByPage = (page: number, perPage: number) => {
  const startIndex = (page - 1) * perPage;
  const endIndex = startIndex + perPage;
  return IDS.slice(startIndex, endIndex);
};
