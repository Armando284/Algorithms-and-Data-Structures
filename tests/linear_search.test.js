import { test, expect } from 'vitest'
import { linearSearch } from '../src/linear_search'

test('Find 3 in an array of [1,2,3,4]', () => {
  expect(linearSearch([1, 2, 3, 4], 3)).toBe(true)
})
