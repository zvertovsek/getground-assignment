import { getMinMaxDifference } from './MinAndMaxDifferenceGetter';

type TestCase = {
  arr1: number[];
  arr2: number[];
  result: number[];
}

const testCases: TestCase[] = [
  { arr1: [3,10,5], arr2: [20,7,15,8], result: [17,2] },
  { arr1: [1,2,3,4,5,6,7,8,9,10], arr2: [1,2,3,4,5,6,7,8,9,10], result: [9,0] },
  { arr1: [3,5,-2], arr2: [-10,2,4,-1], result: [15,1] },
];

describe('Part 1', () => {
test('Minimum and maximum differences', () => {
    testCases.forEach((testCase) => {
      const diffs = getMinMaxDifference(testCase.arr1, testCase.arr2);
      expect(diffs).toMatchObject(testCase.result);
    });
  });
});
