import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";

const TodoItems = ({ onDeleteClick }) => {
  const todoItems = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
