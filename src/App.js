import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Car insurance",
      amount: 300.1,
      date: new Date(2021, 3, 21),
    },
    {
      id: "e2",
      title: "Car Rate",
      amount: 310.1,
      date: new Date(2021, 4, 21),
    },
    {
      id: "e3",
      title: "Mortgage",
      amount: 200.1,
      date: new Date(2022, 3, 21),
    },
  ];

  const addExpenseHandler = (marian) => {
    console.log("In App.js");
    console.log(marian);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}></Expenses>
    </div>
  );
}

export default App;
