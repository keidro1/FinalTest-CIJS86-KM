import React, { useState } from "react";
import { FaTrash } from 'react-icons/fa';

const TodoItem = (props) => {
  const [edit, setEdit] = useState(false);

  const handleDeleteButton = () => {
    props.onDeleteTodo(props.todo.id);
  };

  return (
    <div
      className="todo-item"
      style={{
        textDecoration: props.todo.isCompleted ? "line-through" : "none",
      }}
    >
      <input
        type="checkbox"
        checked={props.todo.isCompleted}
        onChange={() => props.onSetCompleteTodo(props.todo.id)}
        disabled={props.todo.isCompleted}
      />
      {edit ? (
        <>
        </>
      ) : (
        <>
          <span>{props.todo.title}</span>
          {props.todo.isCompleted && (
            <FaTrash className="trash-icon" onClick={handleDeleteButton} />
          )}
        </>
      )}
    </div>
  );
};

export default TodoItem;
