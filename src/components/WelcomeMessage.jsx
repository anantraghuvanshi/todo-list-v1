import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMessage = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.contextObj;
  return todoItems.length === 0 && <p className="welcome">Enjoy Your Day</p>;
};

export default WelcomeMessage;
