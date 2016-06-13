const majorityElement = function (nums) {
  let majIndex = 0;
  let count = 1;
  nums.forEach((num, i) => {
    if (num === nums[majIndex]) {
      count += 1;
    } else {
      count -= 1;
    }
    if (count === 0) {
      majIndex = i;
      count = 1;
    }
  });
  return nums[majIndex];
};

console.log(majorityElement([1, 1, 2, 1, 1, 3]));
console.log(majorityElement([2, 1, 3, 2]));
console.log(majorityElement([2, 1, 3, 2, 3, 3, 1, 2, 1, 3]));
