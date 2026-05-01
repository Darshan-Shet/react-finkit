export function formatCurrency(value, { currency = "INR", locale = "en-IN", minimumFractionDigits = 0, } = {}) {
    if (isNaN(value))
        return "-";
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        minimumFractionDigits,
    }).format(value);
}
