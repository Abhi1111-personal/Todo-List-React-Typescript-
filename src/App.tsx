import { useState, useEffect } from "react";
import { Todo } from "./types";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./App.css";

const intialTodos = JSON.parse(localStorage.getItem("todos") || "[]");
const App = () => {
  const [todos, settodos] = useState<Todo[]>(intialTodos);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };
    settodos([newTodo, ...todos]);
  };
  const deleteTodo = (id: number) => {
    settodos((items) => items.filter((item) => item.id !== id));
  };
  const toggleTodo = (id: number) => {
    settodos((items) =>
      items.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="app">
      <h1> TodoList </h1>
      <AddTodo onAdd={addTodo}></AddTodo>
      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      ></TodoList>
    </div>
  );
};

export default App;
