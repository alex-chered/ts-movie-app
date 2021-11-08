// router
import { useLocation } from 'react-router-dom';

// HOOK
export const useQueryParam = (
  paramName: string, defaultValue?: string
): { param: string } => {
  // Get the current location
  const location = useLocation();
  // Get query params from the location.search
  const queryParams = new URLSearchParams(location.search);
  // Get the param value
  const param: string = queryParams.get(paramName) || defaultValue || '';

  // RETURN
  return {
    param
  };
};
