import { IQueryParams } from "../models/queryParams.interface";

export const parseSearchParams = (params: IQueryParams, searchParams: URLSearchParams) => {
  const currentParams = Array.from(searchParams.entries()).reduce(
    (obj, [key, value]) => {
      // @ts-ignore
      obj[key] = value;
      return obj;
    },
    {}
  );

  return { ...currentParams, ...params }
}

export const buildQueryString = (params: IQueryParams): string => {
  const queries: string[] = [];

  Object.entries(params).forEach((entry) => {
    const [ key, value ] = entry;

    queries.push(`${key}=${value}`);
  })

  return queries.join('&');
}