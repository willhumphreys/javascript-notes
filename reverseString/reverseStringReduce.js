export const reverse =
    string => string.split('').reduce((rev, char) => char + rev, '');
