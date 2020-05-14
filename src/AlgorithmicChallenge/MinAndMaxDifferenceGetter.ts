type NumberOrUndefined = number | undefined;

export function getMinMaxDifference(arr1: number[], arr2: number[]): NumberOrUndefined[] {
  let min: NumberOrUndefined;
  let max: NumberOrUndefined;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      const diff: number = Math.abs(arr1[i] - arr2[j]); 
      max = (typeof max === 'undefined' || diff > max) ? diff : max;
      min = (typeof min === 'undefined' || diff < min) ? diff : min;
    }
  }
  
  return [max, min];
}
