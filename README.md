# 💰 react-finkit

A lightweight React component library for building **personal finance UIs** — budgets, savings goals, and net worth dashboards.

![npm version](https://img.shields.io/npm/v/react-finkit)
![downloads](https://img.shields.io/npm/dm/react-finkit)
![license](https://img.shields.io/npm/lå/react-finkit)

---

## ✨ Why react-finkit?

Building financial dashboards from scratch is repetitive.

`react-finkit` gives you:

* 📊 Ready-to-use finance components
* 🌍 International currency formatting
* ⚡ Clean, reusable APIs
* 🎯 Focus on real-world financial use cases

---

## 🚀 Installation

```bash
npm install react-finkit
```

---

## ⚛️ Usage

```tsx
import {
  ExpenseBar,
  SavingsGoal,
  NetWorthCard,
  BudgetRing,
  CashFlowChart
} from "react-finkit"
```

---

## 📦 Components

---

### 📊 ExpenseBar

Shows how much budget is used with visual feedback.

```tsx
<ExpenseBar
  spent={12000}
  budget={10000}
/>
```

✅ Automatically:

* Calculates percentage
* Highlights over-budget (red)

---

### 🎯 SavingsGoal

Track progress toward a financial goal.

```tsx
<SavingsGoal
  current={20000}
  target={100000}
  monthly={5000}
/>
```

✅ Displays:

* Progress %
* Remaining time (months)
* Goal completion state

---

### 💼 NetWorthCard

Simple net worth breakdown.

```tsx
<NetWorthCard
  assets={500000}
  liabilities={200000}
/>
```

✅ Shows:

* Net worth (color-coded)
* Assets vs liabilities

---

### ⭕ BudgetRing

Visual circular budget tracking for compact dashboards.

```tsx
<BudgetRing
  spent={18000}
  budget={25000}
  currency="INR"
  locale="en-IN"
/>
```

✅ Shows:

* Circular spending progress
* Remaining or over-budget state
* Compact summary for cards and widgets

---

### 📈 CashFlowChart

Compare income vs. spend over time with a lightweight line chart.

```tsx
<CashFlowChart
  data={[
    { label: "Jan", income: 90000, spend: 52000 },
    { label: "Feb", income: 88000, spend: 61000 },
    { label: "Mar", income: 94000, spend: 57000 },
    { label: "Apr", income: 97000, spend: 64000 }
  ]}
  currency="INR"
  locale="en-IN"
/>
```

✅ Shows:

* Income and spend trend lines
* Net cash flow summary
* Compact period-by-period breakdown

---

## 🌍 Currency & Locale Support

All components support international formatting:

```tsx
<NetWorthCard
  assets={500000}
  liabilities={200000}
  currency="USD"
  locale="en-US"
/>
```

---

## 🧠 Utilities

---

### formatCurrency

```ts
import { formatCurrency, calcNetWorth, daysToGoal, calcSavingsProgress } from "react-finkit"

formatCurrency(100000)
// ₹1,00,000 (default)
```

```ts
formatCurrency(100000, {
  currency: "USD",
  locale: "en-US"
})
// $100,000

calcNetWorth(500000, 200000)
// 300000

daysToGoal(20000, 100000, 5000)
// 480

calcSavingsProgress(25000, 100000)
// 25
```

---

## 🎨 Styling

* Minimal default styles
* Fully customizable via `className`

```tsx
<ExpenseBar className="my-custom-style" />
```

---

## 🛠 Tech Stack

* React 18
* TypeScript
* Vite (Library Mode)
* clsx

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── ExpenseBar/
 │    ├── SavingsGoal/
 │    ├── NetWorthCard/
 │    ├── BudgetRing/
 │    └── CashFlowChart/
 ├── hooks/
 ├── utils/
 └── index.ts
```

---

## 🚧 Roadmap

* [x] Chart components (CashFlow, BudgetRing)
* [ ] Storybook docs
* [ ] More financial utilities
* [ ] Dark mode support

---

## 👨‍💻 Author

**Darshan Shet**

* GitHub: https://github.com/Darshan-Shet

---
