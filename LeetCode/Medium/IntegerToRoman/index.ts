const RomanMap = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

function intToRoman(num: number): string {
  const keys = Object.keys(RomanMap);
  let result = "";

  for (const key of keys) {
    const toInsert = num / RomanMap[key];

    if (toInsert > 0) {
      result += key.repeat(toInsert);

      num %= RomanMap[key];
    }
  }

  return result;
}
