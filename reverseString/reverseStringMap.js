export const reverse = arr => {
  let index = arr.length;

  return arr.split('').map(() => arr[--index]).join('')
};
