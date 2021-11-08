// types
import { PageItemType } from 'components/pagination/types';

// INTERFACE
export interface PageItemDescription {
  key: string;
  active: boolean;
  type: PageItemType;
  text: string;
  pageNumber: number;
}
