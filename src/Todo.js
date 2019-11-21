import React from "react";

const Todo = props => {
  const { item } = props;

  return <li>{item}</li>;
};

export default Todo;
