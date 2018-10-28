import factorial from './factorial2'

describe('my test', () => {
    it('should test the factorial', () => {

        expect(factorial(4)).toEqual(24)

    })


})
