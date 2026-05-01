import clsx from "clsx"
import { formatCurrency } from "../../utils/formatCurrency"

type Props = {
  spent: number
  budget: number
  currency?: string
  locale?: string
  className?: string
}

export default function ExpenseBar({
  spent,
  budget,
  currency = "INR",
  locale = "en-IN",
  className,
}: Props) {
  const percentage = Math.min((spent / budget) * 100, 100)
  const isOver = spent > budget

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex justify-between text-sm mb-1">
        <span>{formatCurrency(spent, { currency, locale })}</span>
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