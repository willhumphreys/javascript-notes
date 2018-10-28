import { reverseString } from './reverseStringReduce'

describe('reverse a string', () => {
    it('should reverse the string hello', () => {
        expect(reverseString('hello')).toEqual('olleh');
    })
})