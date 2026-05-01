import { daysToGoal } from "../../utils/daysToGoal"
import { formatCurrency } from "../../utils/formatCurrency"
import clsx from "clsx"

type Props = {
  current: number
  target: number
  monthly: number
  currency?: string
  locale?: string
  className?: string
}

export default function SavingsGoal({
  current,
  target,
  monthly,
  currency = "INR",
  locale = "en-IN",
  className,
}: Props) {
  const progress = Math.min((current / target) * 100, 100)
  const remaining = target - current
  const days = daysToGoal(current, target, monthly)

  return (
    <div className={clsx("w-full space-y-3", className)}>
      
      {/* Top Info */}
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

      {/* Bottom Info */}
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