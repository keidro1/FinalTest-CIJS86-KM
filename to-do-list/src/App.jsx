import React, { useState, useEffect } from "react";
import "./App.css";
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader";
import TodoPage from "./components/TodoPage";

function App() {
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem('todos');
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

  const onAddTodo = (newTodo) => {
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
  };

  const onDeleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const onSetCompleteTodo = (id) => {
    const newTodos = todos.map((item) => {
      if (id === item.id) {
        return {
          ...item,
          isCompleted: !item.isCompleted,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="">
      <TodoHeader />
      <TodoPage
        todos={todos}
        onAddTodo={onAddTodo}
        onDeleteTodo={onDeleteTodo}
        onSetCompleteTodo={onSetCompleteTodo}
      />
      <TodoFooter />
    </div>
  );
}

export default App;
