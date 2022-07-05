export const makeApiRequest = async (...args) => {
  const { makeApiRequest } = await import('@logrhythm/shared/api');
  return makeApiRequest(...args);
};
