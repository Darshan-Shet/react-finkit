import { daysToGoal } from "../../utils/daysToGoal"
import { formatCurrency } from "../../utils/formatCurrency"
import { calcSavingsProgress } from "../../utils/calcSavingsProgress"
import clsx from "clsx"

type Props = {
  current: number
  target: number
  monthly: number
  title?: string
  currency?: string
  locale?: string
  showMonthlyContribution?: boolean
  className?: string
}

export default function SavingsGoal({
  current,
  target,
  monthly,
  title = "Savings goal",
  currency = "INR",
  locale = "en-IN",
  showMonthlyContribution = false,
  className,
}: Props) {
  const progress = calcSavingsProgress(current, target)
  const remaining = target - current
  const days = daysToGoal(current, target, monthly)

  return (
    <div className={clsx("w-full space-y-3", className)}>
      <div className="flex items-center justify-between text-sm">
        <span className="font-medium text-gray-700">{title}</span>
        {showMonthlyContribution ? (
          <span className="text-xs text-gray-500">
            {formatCurrency(monthly, { currency, locale })}/month
          </span>
        ) : null}
      </div>

      <div className="flex justify-between text-sm">
        <span>
          {formatCurrency(current, { currency, locale })}
        </span>
        <span>
          {formatCurrency(target, { currency, locale })}
        </span>
      </div>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="h-3 bg-green-500 rounded-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between text-xs text-gray-500">
        <span>{Math.round(progress)}% completed</span>
        <span>
          {remaining > 0
            ? `${Math.ceil(days / 30)} months left`
            : "Goal reached 🎉"}
        </span>
      </div>
    </div>
  )
}
