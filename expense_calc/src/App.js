import "./App.css";
import ExpenseItem from "./components/ExpenseItem";
import expenses from "./data/expenses";

function App() {
  return (
    <>
      <ExpenseItem
        title={expenses[0].title}
        date={expenses[0].date}
        price={expenses[0].price}
      />
    </>
  );
}

export default App;
