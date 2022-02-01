function myAtoi(s: string): number {
  let result = 0;
  let isNegative;
  let readNumber = false;

  for (let i = 0; i < s.length; i++) {
    const element = parseInt(s[i]);

    if (!isNaN(element)) {
      const temp = result * 10 + element;

      readNumber = true;
      result = temp;
    } else if (!readNumber && isNegative == undefined) {
      if (s[i] == "-") {
        isNegative = true;
      } else if (s[i] == "+") {
        isNegative = false;
      } else if (s[i] != " ") break;
    } else break;
  }

  const limit = Math.pow(2, 31);

  if (result > limit - 1 || result < -limit) {
    if (isNegative) {
      return -limit;
    } else return limit - 1;
  }

  if (isNegative) result *= -1;

  return result;
}
