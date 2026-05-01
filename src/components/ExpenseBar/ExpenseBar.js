import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { formatCurrency } from "../../utils/formatCurrency";
export default function ExpenseBar({ spent, budget, currency = "INR", locale = "en-IN", className, }) {
    const percentage = Math.min((spent / budget) * 100, 100);
    const isOver = spent > budget;
    return (_jsxs("div", { className: clsx("w-full", className), children: [_jsxs("div", { className: "flex justify-between text-sm mb-1", children: [_jsx("span", { children: formatCurrency(spent, { currency, locale }) }), _jsxs("span", { children: [Math.round(percentage), "%"] })] }), _jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: _jsx("div", { className: clsx("h-2 rounded-full transition-all", isOver ? "bg-red-500" : "bg-blue-600"), style: { width: `${percentage}%` } }) })] }));
}
