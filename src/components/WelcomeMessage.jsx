import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};

export default WelcomeMessage;
