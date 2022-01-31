function lengthOfLongestSubstring(s: string): number {
  let longestSubstring = "";
  let actualSubstring = "";

  for (const subS of s) {
    const index = actualSubstring.indexOf(subS);

    if (index != -1) {
      if (actualSubstring.length > longestSubstring.length) {
        longestSubstring = actualSubstring;
      }

      actualSubstring = actualSubstring.slice(
        index + 1,
        actualSubstring.length
      );
    }

    actualSubstring += subS;
  }

  if (actualSubstring.length > longestSubstring.length) {
    longestSubstring = actualSubstring;
  }

  return longestSubstring.length;
}
