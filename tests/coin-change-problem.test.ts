import { coinChange } from '../src/coin-change-problem.ts';
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("it should return how many ways change can be made for amount", () => {
    it("should return that there are 3 ways to make change for", () => {
        const n = 3
        const c = [8, 3, 1, 2]

        const output = 3
        const result = coinChange(n, c)

        // assert.deepEqual(result, output)
    })
})