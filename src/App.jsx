import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "20/02/24",
    },
    {
      name: "Commit Suicide",
      dueDate: "20/02/24",
    },
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
