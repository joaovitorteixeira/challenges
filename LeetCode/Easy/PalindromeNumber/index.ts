function isPalindrome(x: number): boolean {
  if (x < 0) return false;

  let inverseX = 0;
  let auxX = x;

  while (auxX != 0) {
    const pop = auxX % 10;
    const temp = inverseX * 10 + pop;

    inverseX = temp;
    auxX = Math.floor(auxX / 10);
  }

  return x == inverseX;
}
