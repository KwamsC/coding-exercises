/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
export const wordBreak = (s, wordDict) => {
    const output = []
    const start = s

    const recurse = (start, sentence) => {
        if (sentence.join("") === s) {
            output.push(sentence.join(" "))
            return
        }

        wordDict.forEach(word => {
            if(!start.startsWith(word)) return
    
            const remainder = start.substring(word.length)

            sentence.push(word)
            recurse(remainder, sentence)
            sentence.pop()
        })
    }

    recurse(start, [])
    return output
}