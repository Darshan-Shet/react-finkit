import clsx from "clsx"
import { formatCurrency } from "../../utils/formatCurrency"

type CashFlowPoint = {
  label: string
  income: number
  spend: number
}

type Props = {
  data: CashFlowPoint[]
  title?: string
  currency?: string
  locale?: string
  height?: number
  className?: string
}

const CHART_WIDTH = 320

function buildLinePath(values: number[], maxValue: number, chartHeight: number) {
  if (values.length === 0 || maxValue <= 0) return ""

  const stepX = values.length === 1 ? 0 : CHART_WIDTH / (values.length - 1)

  return values
    .map((value, index) => {
      const x = index * stepX
      const y = chartHeight - (value / maxValue) * chartHeight
      return `${index === 0 ? "M" : "L"} ${x} ${y}`
    })
    .join(" ")
}

export default function CashFlowChart({
  data,
  title = "Cash flow",
  currency = "INR",
  locale = "en-IN",
  height = 180,
  className,
}: Props) {
  const chartData = data.slice(-8)
  const incomeValues = chartData.map((point) => Math.max(point.income, 0))
  const spendValues = chartData.map((point) => Math.max(point.spend, 0))
  const maxValue = Math.max(...incomeValues, ...spendValues, 0)

  const totalIncome = incomeValues.reduce((sum, value) => sum + value, 0)
  const totalSpend = spendValues.reduce((sum, value) => sum + value, 0)
  const netFlow = totalIncome - totalSpend

  const incomePath = buildLinePath(incomeValues, maxValue, height)
  const spendPath = buildLinePath(spendValues, maxValue, height)

  return (
    <div className={clsx("w-full rounded-2xl border p-4 space-y-4", className)}>
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm text-gray-500">{title}</h3>
          <p className="text-xl font-semibold text-gray-900">
            {formatCurrency(netFlow, { currency, locale })}
          </p>
          <p className="text-xs text-gray-500">Net cash flow across selected period</p>
        </div>

        <div className="flex gap-3 text-xs text-gray-500">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Income
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            Spend
          </span>
        </div>
      </div>

      {chartData.length > 0 ? (
        <div className="space-y-3">
          <svg
            viewBox={`0 0 ${CHART_WIDTH} ${height}`}
            className="h-auto w-full overflow-visible"
            role="img"
            aria-label={`${title} chart`}
          >
            {[0.25, 0.5, 0.75, 1].map((ratio) => (
              <line
                key={ratio}
                x1="0"
                x2={CHART_WIDTH}
                y1={height - height * ratio}
                y2={height - height * ratio}
                stroke="#e5e7eb"
                strokeDasharray="4 4"
              />
            ))}

            <path
              d={incomePath}
              fill="none"
              stroke="#10b981"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={spendPath}
              fill="none"
              stroke="#f43f5e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {chartData.map((point, index) => {
              const stepX = chartData.length === 1 ? 0 : CHART_WIDTH / (chartData.length - 1)
              const x = index * stepX
              const incomeY = maxValue > 0 ? height - (incomeValues[index] / maxValue) * height : height
              const spendY = maxValue > 0 ? height - (spendValues[index] / maxValue) * height : height

              return (
                <g key={point.label}>
                  <circle cx={x} cy={incomeY} r="4" fill="#10b981" />
                  <circle cx={x} cy={spendY} r="4" fill="#f43f5e" />
                </g>
              )
            })}
          </svg>

          <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {chartData.map((point) => (
              <div key={point.label} className="rounded-xl bg-gray-50 px-3 py-2">
                <p className="text-xs text-gray-500">{point.label}</p>
                <p className="text-emerald-600">
                  {formatCurrency(point.income, { currency, locale })}
                </p>
                <p className="text-rose-500">
                  {formatCurrency(point.spend, { currency, locale })}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="rounded-xl bg-gray-50 px-4 py-8 text-center text-sm text-gray-500">
          Add at least one income/spend point to render the chart.
        </div>
      )}
    </div>
  )
}
