/* eslint-disable arrow-body-style, no-param-reassign */

const intersection = (nums1, nums2) => {
  // const hash = nums1.reduce(
  //   (prev, current) => ({ ...prev, [current]: 1 }),
  //   {}
  // );
  const hash = nums1.reduce((prev, current) => {
    prev[current] = 1;
    return prev;
  }, {});
  const output = [];
  const hash2 = {};
  nums2.forEach(n => {
    if (hash[n]) {
      if (!hash2[n]) {
        output.push(n);
        hash2[n] = 1;
      }
    }
  });
  return output;
};

console.log(intersection([1, 2, 2, 1], [2, 2, 3, 3, 1]));
