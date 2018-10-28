export const factorial = num => {
  let result = 1;
  while (--num) result *= num + 1;
  return result;
};
