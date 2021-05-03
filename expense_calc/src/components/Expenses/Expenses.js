import expenseData from "../../data/expenses";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css"

function Expenses() {
  return (
    <div className="expenses">
      <ExpenseItem
        title={expenseData[0].title}
        date={expenseData[0].date}
        price={expenseData[0].price}
      />
      <ExpenseItem
        title={expenseData[1].title}
        date={expenseData[1].date}
        price={expenseData[1].price}
      />
      <ExpenseItem
        title={expenseData[2].title}
        date={expenseData[2].date}
        price={expenseData[2].price}
      />
      <ExpenseItem
        title={expenseData[3].title}
        date={expenseData[3].date}
        price={expenseData[3].price}
      />
    </div>
  );
}

export default Expenses;
