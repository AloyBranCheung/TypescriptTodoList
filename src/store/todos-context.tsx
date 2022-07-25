import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObjc = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

const TodoContext = React.createContext<TodosContextObjc>({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});

export { TodoContext };

const TodoContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [todos, setToDos] = useState<Todo[]>([]);

  const addTodoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setToDos((prevState) => {
      return prevState.concat(newTodo);
    });
  };

  const removeHandler = (todoId: string) => {
    setToDos((prevState) => {
      return prevState.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObjc = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
