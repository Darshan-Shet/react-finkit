# 💰 react-finkit

A lightweight React component library for building **personal finance UIs** — budgets, savings goals, and net worth dashboards.

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
  NetWorthCard
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
import { formatCurrency } from "react-finkit"

formatCurrency(100000)
// ₹1,00,000 (default)
```

```ts
formatCurrency(100000, {
  currency: "USD",
  locale: "en-US"
})
// $100,000
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
 │    └── NetWorthCard/
 ├── hooks/
 ├── utils/
 └── index.ts
```

---

## 🚧 Roadmap

* [ ] Chart components (CashFlow, BudgetRing)
* [ ] Storybook docs
* [ ] More financial utilities
* [ ] Dark mode support

---

## 👨‍💻 Author

**Darshan Shet**

* GitHub: https://github.com/Darshan-Shet

---