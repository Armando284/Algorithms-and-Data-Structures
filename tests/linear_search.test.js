import { test, expect } from 'vitest'
import { linearSearch } from '../src/algorithms/linear_search'

test('Find 3 in an array of [1,2,3,4]', () => {
  expect(linearSearch([1, 2, 3, 4], 3)).toBe(true)
})

test("Don't find 5 in [1,2,3,4]", () => {
  expect(linearSearch([1, 2, 3, 4], 5)).toBeFalsy()
})
