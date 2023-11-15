export const parseSearchParams = (params, searchParams) => {
  const currentParams = Array.from(searchParams.entries()).reduce(
    (obj, [key, value]) => {
      obj[key] = value;
      return obj;
    },
    {}
  );

  return { ...currentParams, ...params }
}