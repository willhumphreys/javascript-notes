export const reverse = arr => {
  let index = arr.length;

  let hello = 'onetwothree';

  hello.split('');

  console.log(arr);

  return arr.split('').map(() => arr[--index]).join('')
};
