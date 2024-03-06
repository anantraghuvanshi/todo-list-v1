import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import ThemeSelector from "./components/ThemeSelector";
import { themes } from "./components/themes";

import "./App.css";
import { useState } from "react";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const initialTodoItems = [];

  const [todoItems, setTodoItems] = useState(initialTodoItems);
  const [theme, setTheme] = useState("light");

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
  };

  const handleNewItem = (itemName, itemDueDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { name: itemName, dueDate: itemDueDate },
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <TodoItemsContext.Provider value={todoItems}>
      <div className="todo-container" style={themes[theme]}>
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        <WelcomeMessage />
        <TodoItems onDeleteClick={handleDeleteItem} />
        <div className="themeSelector">
          <ThemeSelector onThemeChange={handleThemeChange} />
        </div>
      </div>
    </TodoItemsContext.Provider>
  );
}

export default Apps;
