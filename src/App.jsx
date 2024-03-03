import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item added: ${itemName} Date: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
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
