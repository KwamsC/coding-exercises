/**
 * Takes an array of integers and returns a new array with squares of those integers in sorted order
 * @param {number[]} numbers
 * @return {number[]} 
 */
export function sortedSquaredArray(numbers){
  const squaredArray = numbers.map((i) => i * i)
  
  for (let i = 0; i < squaredArray.length; i++) {
      for (let j = i ; j < squaredArray.length; j++) {          
          if (squaredArray[j] < squaredArray[i]){
            [squaredArray[i], squaredArray[j]] = [squaredArray[j], squaredArray[i]]
          }
      }
  }
  
  return squaredArray
}

