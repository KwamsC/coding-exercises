/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
export const gcd = (str1, str2) => {
    if (!str1 || !str2.length) return ""

    const shortestWord  = str1.length < str2.length ? str1 : str2
    const word = ''

    for (let i = shortestWord.length; i > 0; i-- ){
        const base = shortestWord.substring(0, i)
        
        const result1 = str1.replaceAll(base, '')
        const result2 = str2.replaceAll(base, '')

        if (!result1 && !result2) return base
    }

    return word
}