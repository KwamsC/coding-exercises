/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
export const wordBreak = (s, wordDict) => {
    const output: string[] = []
    const start = s

    const recurse = (start, sentence) => {
        if (sentence.join("") === s) {
            output.push(sentence.join(" "))
            return
        }

        // biome-ignore lint/complexity/noForEach: <explanation>
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