function reverse(x: number): number {
  let inverse = 0;
  const func = x > 0 ? Math.floor : Math.ceil;
  const limit = Math.pow(2, 31);

  while (x != 0) {
    const rest = x % 10;
    const temp = inverse * 10 + rest;

    x = func(x / 10);
    inverse = temp;
  }

  if (inverse > limit - 1 || inverse < -limit) {
    return 0;
  }

  return inverse;
}
