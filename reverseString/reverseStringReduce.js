export const reverseString =
    string => string.split('').reduce((rev, char) => char + rev, '');
