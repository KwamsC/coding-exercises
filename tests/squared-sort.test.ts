import { sortedSquaredArray } from "../src/squared-sort.ts";
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("should return a sorted squared array on given integers", () => {
    it("should return an array with squared values sorted in ascending order", () => {
        const unsortedArray = [1,2,3,4,5]

        const result = sortedSquaredArray(unsortedArray)

        assert.deepEqual(result, [1,4,9,16,25])
    })

    it("should return an empty string if the words are empty", () => {
        const unsortedArray = [-5,-3,-1,0,2,4]

        const result = sortedSquaredArray(unsortedArray)

        assert.deepEqual(result, [0,1,4,9,16,25])
    })

    it("should return an array with squared values sorted in ascending order for input with all zeros", () => {
        const unsortedArray = [0,0,0,0,0]

        const result = sortedSquaredArray(unsortedArray)

        assert.deepEqual(result, [0,0,0,0,0])
    })

    it("should return an array with squared values sorted in ascending order for single input", () => {
      const unsortedArray = [10]

      const result = sortedSquaredArray(unsortedArray)

      assert.deepEqual(result, [100])
    })

    it("should return an array with squared values sorted in ascending order for an empty input", () => {
      const unsortedArray = []

      const result = sortedSquaredArray(unsortedArray)

      assert.deepEqual(result, [])
    })

    it("should return an array with squared values sorted in ascending order for input with mixed numbers", () => {
      const unsortedArray = [-2,0,3,5]

      const result = sortedSquaredArray(unsortedArray)

      assert.deepEqual(result, [0,4,9,25])
    })
})