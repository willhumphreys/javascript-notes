import { isPrime } from './isPrime'

describe('prime tests', () => {
    it('should return true for the number 5', () => {
        expect(isPrime(5)).toBe(true);
    })

    it('should return false for the number 6', () => {

        expect(isPrime(6)).toBe(false)
    })


    it('should return true for the number 11', () => {
        expect(isPrime(11)).toBe(true)
    })
})