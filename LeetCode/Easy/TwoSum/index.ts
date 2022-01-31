function twoSum(nums: number[], target: number): number[] {
  const elements = nums.reduce((acc, value, index) => {
    const element = new NodeLinkedList(value, index);
    LinkedList.addElement(acc, element);

    return acc;
  }, []);

  let low = 0;
  let high;

  while (elements.length) {
    high = elements.length - 1;

    if (elements[low].value + elements[high].value > target) elements.pop();
    else if (elements[low].value + elements[high].value < target)
      elements.shift();
    else return [elements[low].index, elements[high].index];
  }
}

class NodeLinkedList {
  public value: number;
  public index: number;

  constructor(value: number, index: number) {
    this.value = value;
    this.index = index;
  }
}

class LinkedList {
  public static addElement(array: NodeLinkedList[], element: NodeLinkedList) {
    array.splice(this.sortedIndex(array, element.value), 0, element);
  }

  private static sortedIndex(array: NodeLinkedList[], value: number) {
    let low = 0;
    let high = array.length;

    while (low < high) {
      const mid = (low + high) >>> 1;

      if (array[mid].value < value) low = mid + 1;
      else high = mid;
    }

    return low;
  }
}
