import React from "react";

export default function FirstComponent({ objects }) {
  const myList = objects.map(element => (
    <div key={element.id}>
      <h1>{element.name}</h1>
    </div>
  ));
  return (<div>{myList}</div>);
}
