import React from "react";
import TodoListItem from "../components/TodoListItem";
import styles from "./Todos.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todos-context";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodoContext);

  return (
    <ul className={styles.todos}>
      {todosCtx.items.map((item) => (
        <TodoListItem
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          key={item.id}
          text={item.text}
        ></TodoListItem>
      ))}
    </ul>
  );
};

export default Todos;
