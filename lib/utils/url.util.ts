export const getPaths = (url: URL): Array<string> => {
  return url.pathname.split("/").filter((item) => !!item.length);
};
export const getQueries = (url: URL): URLSearchParams => {
  return new URLSearchParams(url.searchParams);
};
