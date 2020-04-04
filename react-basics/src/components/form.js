import React, { useState } from "react";

export default function Form({ addElement }) {
  const [value, setValue] = useState({
    name: null,
    lastName: null
  });

  const handleChange = e => {
    setValue({ ...value,[e.target.id]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    addElement(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="name" placeholder="Enter name..." onChange={handleChange} />
        <input
          id="lastName"
          placeholder="Enter last name..."
          onChange={handleChange}
        />
        <button>Submit!</button>
      </form>
    </div>
  );
}
