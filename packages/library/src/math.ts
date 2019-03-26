export function add(a: number, b: number) {
  return a + b
}

export function addMany(...a: number[]) {
  return a
  .reduce((total, num) => total + num, 0)
}

export function multiply(a: number, b: number) {
  return a * b
}

export function multiplyMany(...a: number[]) {
  return a
  .reduce((total, num) => total * num, 1)
}
