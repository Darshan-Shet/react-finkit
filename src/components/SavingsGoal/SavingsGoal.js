import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { daysToGoal } from "../../utils/daysToGoal";
import { formatCurrency } from "../../utils/formatCurrency";
import clsx from "clsx";
export default function SavingsGoal({ current, target, monthly, currency = "INR", locale = "en-IN", className, }) {
    const progress = Math.min((current / target) * 100, 100);
    const remaining = target - current;
    const days = daysToGoal(current, target, monthly);
    return (_jsxs("div", { className: clsx("w-full space-y-3", className), children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { children: formatCurrency(current, { currency, locale }) }), _jsx("span", { children: formatCurrency(target, { currency, locale }) })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: _jsx("div", { className: "h-3 bg-green-500 rounded-full transition-all", style: { width: `${progress}%` } }) }), _jsxs("div", { className: "flex justify-between text-xs text-gray-500", children: [_jsxs("span", { children: [Math.round(progress), "% completed"] }), _jsx("span", { children: remaining > 0
                            ? `${Math.ceil(days / 30)} months left`
                            : "Goal reached 🎉" })] })] }));
}
