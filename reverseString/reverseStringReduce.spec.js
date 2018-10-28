import { reverse } from './reverseStringReduce'

describe('reverse a string', () => {
    it('should reverse the string hello', () => {
        expect(reverse('hello')).toEqual('olleh');
    })
})