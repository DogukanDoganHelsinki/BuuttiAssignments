import { summation } from './index.js'

test('Summation of zero is zero', () => {
    expect(summation(0)).toBe(0)
})

test('Summation of 5 is 15', () => {
    expect(summation(5)).toBe(15)
})

test('Summation of 120 is 7260', () => {
    expect(summation(120)).toBe(7260)
})

test('Summation of 12.36 is 78', () => {
    expect(summation(12.36)).toBe(78)
})

test('Summation of not number is NaN', () => {
    expect(summation('zero')).toBe(NaN)
})

test('Summation of negative is zero', () => {
    expect(summation(-10)).toBe(0)
})