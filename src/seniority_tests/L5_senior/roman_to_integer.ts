/**
 * Senior: Roman to Integer and Vice Versa Converter
 *
 * Description:
 * Write two functions, one that converts Roman numerals to integers and another that performs the reverse conversion from integers to Roman numerals.
 * Consider values between 1 and 3999.
 *
 * Example:
 * romanToInt("MCMXCIV"); // 1994
 * intToRoman(1994); // "MCMXCIV"
 *
 * Key Points in an Interview:
 * - Key Point 1: Explain the logic of Roman numerals, particularly how some characters represent subtraction (e.g., "IV" = 4).
 * - Key Point 2: Describe how you handled input validation to prevent out-of-range values or invalid characters.
 * - Key Point 3: Show how you implemented the conversion of numbers to Roman numerals within defined logical ranges.
 *
 * Additional Requirement:
 * Implement a system that rejects invalid Roman numerals, such as "IIII" instead of "IV".
 */

const ROMAN_NUMBERS_VALUES: { [key: string]: number } = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

const VALID_RESTS = new Set(['IV', 'IX', 'XL', 'XC', 'CD', 'CM'])

function romanToInt (roman: string): number {
  let result = 0
  let repeatCount = 0
  // loop sobre la cadena
  for (let i = 0; i < roman.length; i++) {
    // tomar valor de letra actual y siguiente
    const currentPair = roman[i] + roman[i + 1]
    const current = ROMAN_NUMBERS_VALUES[roman[i]]
    const next = ROMAN_NUMBERS_VALUES[roman[i + 1]] ?? 0
    // si el simbolo no es valido
    if (current == null || next == null) throw new Error('Invalid roman number')
    // si actual y siguiente son iguales sumar contador de igualdad sino restar
    repeatCount = current === next ? repeatCount + 1 : 0
    // si van mas de 3 iguales ERROR
    if (repeatCount > 3) throw new Error('Invalid roman number')
    // si la anterior es mayor o igual o 0 (inicio de la cadena) sumar
    if (current >= next) {
      result += current
    } else if (!VALID_RESTS.has(currentPair)) {
      // validar si resta es valida, no todos los números pueden restar
      throw new Error(`Invalid roman number ${currentPair}`)
    } else {
      // si la anterior es menor restar
      result -= current
    }
  }
  return result
}

console.log(romanToInt('MCMXCIV')) // 1994

const ROMAN_DIGITS: { [key: number]: { [key: string]: string } } = {
  0: { 1: 'M', 2: 'MM', 3: 'MMM' },
  1: { 1: 'C', 2: 'CC', 3: 'CCC', 4: 'CD', 5: 'D', 6: 'DC', 7: 'DCC', 8: 'DCCC', 9: 'CM' },
  2: { 1: 'X', 2: 'XX', 3: 'XXX', 4: 'XL', 5: 'L', 6: 'LX', 7: 'LXX', 8: 'LXXX', 9: 'XC' },
  3: { 1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII', 8: 'VIII', 9: 'IX' }
}

function intToRoman (int: number): string {
  if (
    !Number.isInteger(int) ||
    int < 1 || int > 3999
  ) throw new Error('Value must be an integer between 1 and 3999!')

  return int.toString().padStart(4).split('').map((s, i) => ROMAN_DIGITS[i][s] ?? '').join('')
}

console.log(intToRoman(1994)) // "MCMXCIV"
