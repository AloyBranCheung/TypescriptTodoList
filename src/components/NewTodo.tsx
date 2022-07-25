import React, { useRef } from "react";
import styles from "./NewTodo.module.css";
import { useContext } from "react";
import { TodoContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodoContext);
  const enteredInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = enteredInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo text</label>
      <input ref={enteredInputRef} type="text" />
      <button name="Add Todo">Add Todo</button>
    </form>
  );
};

export default NewTodo;
