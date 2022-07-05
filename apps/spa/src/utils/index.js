// const importFunc = async (funcPromise) => {
//   const func = await funcPromise;
//   return (...args) => func(...args);
// };

// export const makeApiRequest = importFunc(import('@logrhythm/shared/api').then(({ makeApiRequest }) => makeApiRequest));

export const makeApiRequest = async (...args) => {
  const { makeApiRequest } = await import('@logrhythm/shared/api');
  return makeApiRequest(...args);
};
