import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { calcNetWorth } from "../../utils/calcNetWorth";
import { formatCurrency } from "../../utils/formatCurrency";
export default function NetWorthCard({ assets, liabilities, currency = "INR", locale = "en-IN", className, }) {
    const netWorth = calcNetWorth(assets, liabilities);
    const isPositive = netWorth >= 0;
    return (_jsxs("div", { className: clsx("p-4 border rounded-xl space-y-3", className), children: [_jsx("h3", { className: "text-sm text-gray-500", children: "Net Worth" }), _jsx("p", { className: clsx("text-xl font-semibold", isPositive ? "text-green-600" : "text-red-500"), children: formatCurrency(netWorth, { currency, locale }) }), _jsxs("div", { className: "flex justify-between text-sm text-gray-600", children: [_jsx("span", { children: "Assets" }), _jsx("span", { children: formatCurrency(assets, { currency, locale }) })] }), _jsxs("div", { className: "flex justify-between text-sm text-gray-600", children: [_jsx("span", { children: "Liabilities" }), _jsx("span", { children: formatCurrency(liabilities, { currency, locale }) })] })] }));
}
