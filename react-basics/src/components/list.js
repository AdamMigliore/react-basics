import React from "react";

export default function List({ data, deleteElement }) {
const handleDelete = (event)=>{
  event.preventDefault();
  deleteElement(event.target.id);
}

  const myList = data.map(element => (
    <div key={element.id} onClick={handleDelete}>
      <h3 id={element.id}>
        {element.name} {element.lastName}
      </h3>
    </div>
  ));
  return <div>{myList}</div>;
}
