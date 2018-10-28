export const reverseString = (word) => {
    const limit = word.length / 2;

    let wordArr = word.split('');

    for (let i = 0; i < limit; i++) {
        let temp = wordArr[word.length - i - 1];

        wordArr[word.length - i - 1] = wordArr[i];
        wordArr[i] = temp;
    }

    return wordArr.join('');
}