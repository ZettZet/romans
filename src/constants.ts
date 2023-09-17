export const integers = [1000, 500, 100, 50, 10, 5, 1]
const literals = 'mdclxvi'

export const arabicToRomanMap = new Map(integers.map((int, index) => [int, literals[index]]))
export const romanToArabicMap = new Map(integers.map((int, index) => [literals[index], int]))
