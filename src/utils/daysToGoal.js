export function daysToGoal(current, target, monthly) {
    if (monthly <= 0)
        return Infinity;
    const remaining = target - current;
    if (remaining <= 0)
        return 0;
    const months = remaining / monthly;
    return Math.ceil(months * 30);
}
