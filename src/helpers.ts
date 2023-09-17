import { arabicToRomanMap, integers, romanToArabicMap } from './constants.js'

export function isValidRoman(candidate: string): boolean {
	return /^(m{0,4})(d?c{0,3}|c[dm])(l?x{0,3}|x[lc])(v?i{0,3}|i[vx])$/gi.test(candidate)
}

export const processRomanDigit = (digit: string, position: number) => {
	if (position === 4) return 'm'.repeat(digit.toArabic())

	return digit
		.split('')
		.map(char => romanToArabicMap.get(char)!)
		.map(digitNumber => arabicToRomanMap.get(digitNumber * 10 ** (position - 1))!)
		.join('')
}

export const processArabicDigit = (digit: number) => {
	if (digit === 0) return ''
	if (arabicToRomanMap.has(digit)) return arabicToRomanMap.get(digit)!

	const foundLessByOne = integers.find(integer => integer - digit === 1)
	if (foundLessByOne !== undefined) return `i${arabicToRomanMap.get(foundLessByOne)}`

	return integers.reduce((accumulator, integer) => {
		while (digit >= integer) {
			accumulator += arabicToRomanMap.get(integer)
			digit -= integer
		}

		return accumulator
	}, '')
}
