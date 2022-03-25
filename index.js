/*
1
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.
*/

function twoSum(nums, target) {
  let map = new Map;
  for (var i=0; i<nums.length; i++){
      let complement = target - nums[i];
      if (map.has(complement)) {
          return [map.get(complement), i]
      }
      map.set(nums[i], i)
  }
};

console.log(twoSum([2,7,11,15], 9)
//Output [0,1]



/*
2
Identify duplicates of an unlimited number of arrays.
Return array containing duplicates.
Hint: ...args spreads inputs into an array.
*/

function syms(...args) {
  let all = [];
   args.forEach((array) => {
    for(i=0; i<array.length; i++){
      all.push(array[i])
    }
  });
  const duplicates = all.filter((item, index) => all.indexOf(item) !== index)
  return duplicates
}

console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//Output [2, 1];
