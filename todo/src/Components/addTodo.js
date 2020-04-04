import React, { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [todo, setTodo] = useState({
    content: "",
  });

  const handleChange = (e) => {
    setTodo({
      content: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo({ content: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="What is there to do?"
          onChange={handleChange}
          value={todo.content}
        />
      </form>
    </div>
  );
}
