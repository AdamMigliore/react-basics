import React from "react";

export default function Todos({ todos, deleteTodo }) {
  const todosList = todos.length ? (
    todos.map((todo) => {
      return (
        <div onClick={ () => (deleteTodo(todo.id))} className="collection-item" key={todo.id}>
          <p className="text-teal lighten-2">{todo.content}</p>
        </div>
      );
    })
  ) : (
    <div className="center">
      <p className="text-teal lighten-2">Nothing more to do today!</p>
    </div>
  );

  return <div className="todos collection">{todosList}</div>;
}
