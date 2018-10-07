export const reverse = arr => {
  let index = arr.length;
  return arr.map(() => arr[--index]);
};
