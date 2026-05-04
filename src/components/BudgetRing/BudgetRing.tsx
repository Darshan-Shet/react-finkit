import clsx from "clsx"
import { formatCurrency } from "../../utils/formatCurrency"

type Props = {
  spent: number
  budget: number
  title?: string
  currency?: string
  locale?: string
  size?: number
  strokeWidth?: number
  className?: string
}

export default function BudgetRing({
  spent,
  budget,
  title = "Budget usage",
  currency = "INR",
  locale = "en-IN",
  size = 132,
  strokeWidth = 12,
  className,
}: Props) {
  const safeBudget = budget > 0 ? budget : 0
  const progressRatio =
    safeBudget === 0 ? 0 : Math.min(Math.max(spent / safeBudget, 0), 1)
  const progress = Math.round(progressRatio * 100)
  const remaining = Math.max(safeBudget - spent, 0)
  const isOverBudget = safeBudget > 0 && spent > safeBudget

  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - progressRatio)

  return (
    <div
      className={clsx(
        "inline-flex flex-col items-center gap-3 rounded-2xl border p-4 text-center",
        className
      )}
    >
      <div className="space-y-1">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-xs text-gray-400">
          {formatCurrency(spent, { currency, locale })} of{" "}
          {formatCurrency(safeBudget, { currency, locale })}
        </p>
      </div>

      <div className="relative" style={{ width: size, height: size }}>
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="-rotate-90"
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            className={clsx(
              "transition-all duration-300",
              isOverBudget ? "text-red-500" : "text-emerald-500"
            )}
          />
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-semibold">{progress}%</span>
          <span className="text-xs text-gray-500">
            {isOverBudget ? "Over budget" : "Used"}
          </span>
        </div>
      </div>

      <p
        className={clsx(
          "text-sm font-medium",
          isOverBudget ? "text-red-500" : "text-gray-600"
        )}
      >
        {isOverBudget
          ? `${formatCurrency(spent - safeBudget, {
              currency,
              locale,
            })} over budget`
          : `${formatCurrency(remaining, { currency, locale })} remaining`}
      </p>
    </div>
  )
}
