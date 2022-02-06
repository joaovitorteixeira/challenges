function maxArea(height: number[]): number {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let maxArea = 0;

  while (leftPointer < rightPointer) {
    const minSize = Math.min(height[leftPointer], height[rightPointer]);

    maxArea = Math.max(maxArea, minSize * (rightPointer - leftPointer));

    if (height[leftPointer] < height[rightPointer]) leftPointer++;
    else rightPointer--;
  }

  return maxArea;
}
