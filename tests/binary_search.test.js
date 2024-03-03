import { test, expect } from 'vitest'
import { binarySearch } from '../src/binary_search'

test('Find 3 in [1,2,3,4]', () => {
  expect(binarySearch([1, 2, 3, 4], 3)).toBeTruthy()
})

test('Find 5 in [1,2,3,4]', () => {
  expect(binarySearch([1, 2, 3, 4], 5)).toBeFalsy()
})
