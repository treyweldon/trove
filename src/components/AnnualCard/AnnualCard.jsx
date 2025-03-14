import { useBudgets } from "../../contexts/BudgetsContext"
import BudgetCard from "../BudgetCard/BudgetCard"

export default function AnnualCard() {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (max === 0) return null

  return <BudgetCard amount={amount} month="Annual" gray max={max} hideButtons />
}