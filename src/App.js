import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

const App = () => (
  <div>
    <header>Todo List</header>
    <TodoList />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
