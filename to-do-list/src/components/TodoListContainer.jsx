import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoListContainer = (props) => {
  return (
    <div>
      {props.todos.map((todo) => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onSetCompleteTodo={props.onSetCompleteTodo} 
          onUpdateTodo={props.onUpdateTodo}
          onDeleteTodo={props.onDeleteTodo}
        />
      ))}
    </div>
  )
};

export default TodoListContainer;
