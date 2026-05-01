import clsx from "clsx"
import { calcNetWorth } from "../../utils/calcNetWorth"
import { formatCurrency } from "../../utils/formatCurrency"

type Props = {
  assets: number
  liabilities: number
  currency?: string
  locale?: string
  className?: string
}

export default function NetWorthCard({
  assets,
  liabilities,
  currency = "INR",
  locale = "en-IN",
  className,
}: Props) {
  const netWorth = calcNetWorth(assets, liabilities)
  const isPositive = netWorth >= 0

  return (
    <div className={clsx("p-4 border rounded-xl space-y-3", className)}>
      
      {/* Title */}
      <h3 className="text-sm text-gray-500">Net Worth</h3>

      {/* Net Worth Value */}
      <p
        className={clsx(
          "text-xl font-semibold",
          isPositive ? "text-green-600" : "text-red-500"
        )}
      >
        {formatCurrency(netWorth, { currency, locale })}
      </p>

      {/* Breakdown */}
      <div className="flex justify-between text-sm text-gray-600">
        <span>Assets</span>
        <span>{formatCurrency(assets, { currency, locale })}</span>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <span>Liabilities</span>
        <span>{formatCurrency(liabilities, { currency, locale })}</span>
      </div>
    </div>
  )
}