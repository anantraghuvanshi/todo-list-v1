import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState("");

  const handleNewItem = (item, itemDueDate) => {
    console.log(`New Item added: ${item} Date: ${itemDueDate}`);
  };
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      <TodoItems todoItems={todoItems} />
    </center>
  );
}

export default App;
