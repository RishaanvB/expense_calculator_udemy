import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem({ date, title, price }) {
  return (
    <div className="expense-item">
      <ExpenseDate date={date} />

      <section className="expense-item__description">
        <h2>{title}</h2>
        <p className="expense-item__price">€{price}</p>
      </section>
    </div>
  );
}

export default ExpenseItem;
