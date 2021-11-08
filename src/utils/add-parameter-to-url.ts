export const addParameterToUrl = (queryString: string, paramName: string, paramValue: string) => {
  const params = new URLSearchParams(queryString);
  params.set(paramName, paramValue);
  return params.toString();
};
