import { factorial } from './factorial'

describe('factorial tests', () => {
    it('should test the factorial of 4', () => {
        expect(factorial(4)).toEqual(24)
    })

    it('should test the factorial of 3', () => {
        expect(factorial(3)).toEqual(6)
    })


})
