export function calcSavingsProgress(current: number, target: number) {
  if (target <= 0) return 0

  return Math.min(Math.max((current / target) * 100, 0), 100)
}
