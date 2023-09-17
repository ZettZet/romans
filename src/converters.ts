import { arabicToRomanMap, romanToArabicMap } from './constants.js'
import { isValidRoman, processArabicDigit, processRomanDigit } from './helpers.js'

export function toArabic(value: string): number {
	value = value.toLowerCase()

	if (value === '') throw new Error('Expect not to be empty string')
	if (!isValidRoman(value)) throw new Error(`Expect valid roman number, got ${value}`)

	return value
		.split('')
		.map(char => romanToArabicMap.get(char)!)
		.reduce(
			(accumulator, digit, index, digits) =>
				digits[index + 1] > digit ? accumulator - digit : accumulator + digit,
			0,
		)
}

export function toRoman(value: number): string {
	if (!Number.isInteger(value)) throw new Error(`Expected integer, got ${value}`)
	if (value < 0 || value > 5000)
		throw new Error(`Expect value between 0 and 5000 exclusive, got ${value}`)

	if (arabicToRomanMap.has(value)) return arabicToRomanMap.get(value)!

	return value
		.toString()
		.split('')
		.map(Number)
		.map(processArabicDigit)
		.map((digit, index, array) => processRomanDigit(digit, array.length - index))
		.join('')
}
