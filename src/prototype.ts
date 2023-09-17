import { toArabic, toRoman } from './converters.js'

Number.prototype.toRoman = function () {
	return toRoman(this.valueOf())
}

String.prototype.toArabic = function () {
	return toArabic(this.valueOf())
}

declare global {
	interface Number {
		toRoman(): string
	}

	interface String {
		toArabic(): number
	}
}