import "./ExpenseDate.css";

function ExpenseDate({date}) {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();
  return (
    <div className="expense-date">
      <h3 className="expense-date__month">{month}</h3>
      <h4 className="expense-date__year">{year}</h4>
      <h4 className="expense-date__day">{day}</h4>
    </div>
  );
}

export default ExpenseDate;
