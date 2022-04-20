export function padTo2Digits(num: number, pad?: number) {
  return num.toString().padStart(pad, '0')
}
