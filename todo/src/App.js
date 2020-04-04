import React, { useState } from "react";

//My components
import Todos from "./Components/todos";
import AddTodo from "./Components/addTodo";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, content: "Do VHDL 12" },
    { id: 2, content: "Win some Warzone" },
    { id: 3, content: "Workout" },
  ]);

  const [nextId, setNextId] = useState(4);

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
  };

  const addTodo = (todo) => {
    todo.id = nextId;
    setTodos((prevTodos) => [...prevTodos, todo]);
    setNextId((prevId) => prevId + 1);
  };

  return (
    <div className="todo-app container">
      <h1 className="center teal-text"> What's 2Do?</h1>
      <Todos todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo}/>
    </div>
  );
}

export default App;
