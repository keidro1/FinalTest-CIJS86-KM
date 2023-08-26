import React, { useState } from "react";
import TodoFromInput from "./TodoFromInput";
import TodoListContainer from "./TodoListContainer";

const TodoPage = (props) => {
  const [selectedPage, setSelectedPage] = useState("All");

  const handlePageChange = (page) => {
    setSelectedPage(page);
  };

  const filterTodosByPage = () => {
    if (selectedPage === "All") {
      return props.todos;
    } else if (selectedPage === "Active") {
      return props.todos.filter(todo => !todo.isCompleted);
    } else if (selectedPage === "Completed") {
      return props.todos.filter(todo => todo.isCompleted);
    }
  };

  return (
    <div>
      <div className="page-buttons">
        <button onClick={() => handlePageChange("All")}>All</button>
        <button onClick={() => handlePageChange("Active")}>Active</button>
        <button onClick={() => handlePageChange("Completed")}>Completed</button>
      </div>
      {selectedPage === "All" && <TodoFromInput onAddTodo={props.onAddTodo} />}
      <TodoListContainer
        todos={filterTodosByPage()}
        onDeleteTodo={props.onDeleteTodo}
        onSetCompleteTodo={props.onSetCompleteTodo}
        onUpdateTodo={props.onUpdateTodo}
      />
    </div>
  );
};

export default TodoPage;
