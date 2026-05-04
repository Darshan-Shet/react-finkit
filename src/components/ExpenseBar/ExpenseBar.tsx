import clsx from "clsx"
import { formatCurrency } from "../../utils/formatCurrency"

type Props = {
  spent: number
  budget: number
  label?: string
  currency?: string
  locale?: string
  showBudget?: boolean
  className?: string
}

export default function ExpenseBar({
  spent,
  budget,
  label,
  currency = "INR",
  locale = "en-IN",
  showBudget = false,
  className,
}: Props) {
  const safeBudget = budget > 0 ? budget : 0
  const percentage = safeBudget === 0 ? 0 : Math.min((spent / safeBudget) * 100, 100)
  const isOver = safeBudget > 0 && spent > safeBudget

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex justify-between text-sm mb-1">
        <span>
          {label ? `${label}: ` : ""}
          {formatCurrency(spent, { currency, locale })}
          {showBudget
            ? ` / ${formatCurrency(safeBudget, { currency, locale })}`
            : ""}
        </span>
        <span>{Math.round(percentage)}%</span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className={clsx(
            "h-2 rounded-full transition-all",
            isOver ? "bg-red-500" : "bg-blue-600"
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
