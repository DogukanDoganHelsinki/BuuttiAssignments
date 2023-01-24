import { converter } from './converter.js'

test('Zero is always zero', () => {
    expect(converter(0, 'ml', 'oz')).toBe(0)
})