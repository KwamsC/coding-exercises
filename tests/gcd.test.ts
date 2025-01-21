import { gcd } from "../src/gcd.ts";
import { describe, it } from 'node:test';
import assert from 'node:assert';

describe("it should return the greatest common string divisor", () => {
    it("should return an empty string if the words are not divisible", () => {
        const str1 = "HALLO"
        const str2 = "BOOKING"

        const result = gcd(str1, str2)

        assert.equal(result, '')
    })

    it("should return an empty string if the words are empty", () => {
        const str1 = ""
        const str2 = "BOOKING"

        const result = gcd(str1, str2)

        assert.equal(result, '')
    })

    it("should return a common string divisor if words are divisible", () => {
        const str1 = "ABCABC"
        const str2 = "ABC"
        
        const str3 = "ABABAB"
        const str4 = "AB"

        const result1 = gcd(str1, str2)
        const result2 = gcd(str3, str4)

        assert.equal(result1, "ABC")
        assert.equal(result2, "AB")
    })
})