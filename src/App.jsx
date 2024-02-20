import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

import "./App.css";

function App() {
  const todoItem = [
    {
      name: "Buy Milk",
      dueDate: "20/02/24",
    },
    {
      name: "Commite Suicide",
      dueDate: "20/02/24",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <div className="items-container">
        <TodoItem todoName="Buy Milk" todoDate="20/02/24"></TodoItem>
        <TodoItem todoName="Commit Suicide" todoDate="20/02/24"></TodoItem>
      </div>
    </center>
  );
}

export default App;
