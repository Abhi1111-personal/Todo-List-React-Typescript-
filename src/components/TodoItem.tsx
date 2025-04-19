// import React from 'react'
import { Todo } from "../types";

interface Props {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}
const TodoItem = ({ todo, onDelete, onToggle }: Props) => {
  return (
    <div className="item">
      <li
        className={todo.completed ? "completed" : ""}
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        <span>{todo.text}</span>
        <button className="delete-btn" onClick={() => onDelete(todo.id)}>
          Delete
        </button>
        <button className="toggle-btn" onClick={() => onToggle(todo.id)}>
          {todo.completed ? "Undo" : "Completed"}
        </button>
      </li>
    </div>
  );
};

export default TodoItem;
