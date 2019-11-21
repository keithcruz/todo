import React from "react";
import Todo from "./Todo";

const TodoList = () => {
  return (
    <ul>
      <Todo item="lift" />
      <Todo item="run" />
      <Todo item="sleep" />
    </ul>
  );
};

export default TodoList;
