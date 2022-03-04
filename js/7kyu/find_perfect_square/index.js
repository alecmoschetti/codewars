const isSquare = function (n) {
  if (0 > n) return false;
  const sqrt = Math.sqrt(n);
  if (sqrt % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

export function findSquare(n) {
  return Number.isInteger(Math.sqrt(n) % 1);
}
