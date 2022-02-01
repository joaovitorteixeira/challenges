function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  mergeArrays(nums1, nums2);
  const mid = Math.floor(nums1.length / 2);

  if (mid > 0 && nums1.length % 2 == 0) {
    return (nums1[mid] + nums1[mid - 1]) / 2;
  } else return nums1[mid];
}

function mergeArrays(nums1: number[], nums2: number[]): number[] {
  while (nums2.length) {
    const element = nums2.pop();
    const index = findIndexToAdd(nums1, element);

    nums1.splice(index, 0, element);
  }

  return nums1;
}

function findIndexToAdd(array: number[], value): number {
  let low = 0;
  let high = array.length;

  while (low < high) {
    const mid = (low + high) >>> 1;

    if (array[mid] < value) low = mid + 1;
    else high = mid;
  }

  return low;
}
