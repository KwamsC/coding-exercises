import { wordBreak } from "../src/wordbreak2.ts"
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("it should return the right wordBreak", () => {
    it("should return a wordBreak", () => {
        const s = "catsanddog"
        const wordDict = ["cat","cats","and","sand","dog"]

        const output = ["cats and dog","cat sand dog"]
        const result = wordBreak(s, wordDict)

        assert.deepStrictEqual(new Set(result), new Set(output))
    })

    it("should return an s wordBreak", () => {
        const s = "pineapplepenapple"
        const wordDict = ["apple","pen","applepen","pine","pineapple"]

        const output = ["pine apple pen apple","pineapple pen apple","pine applepen apple"]

        const result = wordBreak(s, wordDict)

        assert.deepStrictEqual(new Set(result), new Set(output))
    })

    it("should return an empty wordBreak", () => {
        const s = "catsandog"
        const wordDict = ["cats","dog","sand","and","cat"]

        const output = []

        const result = wordBreak(s, wordDict)

        assert.deepStrictEqual(new Set(output), new Set(result))
    })
})