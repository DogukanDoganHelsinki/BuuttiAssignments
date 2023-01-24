import { calculator } from './calculator.js'

test('Multiplying with zero should return zero', () => {
    const testNumbers = [0, 1, -1, 3.14, -9.999, 1e+100, 5e-100]
    testNumbers.forEach(x => {
        expect(calculator('*', 0, x) === 0).toEqual(true)
        expect(calculator('*', x, 0) === 0).toEqual(true)
    })
})

test('Positive integer multiplication should work', () => {
    expect(calculator('*', 1, 5)).toBe(5)
    expect(calculator('*', 2, 3)).toBe(6)
    expect(calculator('*', 999, 999)).toBe(998_001)
})

test('Negative integer multiplication should work', () => {
    expect(calculator('*', -1, 5)).toBe(-5)
    expect(calculator('*', 3, -9)).toBe(-27)
    expect(calculator('*', -2, -3)).toBe(6)
})

test('Float multiplication should work', () => {
    const d = 1e-5
    expect(calculator('*', 0.5, 0.5)).toBe(0.25)
    expect(calculator('*', 0.00001, 0.00001) - 0.000000001 < d).toBe(true)
    expect(calculator('*', 0.1, -0.05) - 0.005 < d).toBe(true)
})
