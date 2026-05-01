type Options = {
  currency?: string
  locale?: string
  minimumFractionDigits?: number
}

export function formatCurrency(
  value: number,
  {
    currency = "INR",
    locale = "en-IN",
    minimumFractionDigits = 0,
  }: Options = {}
) {
  if (isNaN(value)) return "-"

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits,
  }).format(value)
}