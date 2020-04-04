import React, { useState } from "react";
import List from "./components/list";
import Form from "./components/form";

function App() {
  const [elements, setElements] = useState([
    { name: "Thomas", lastName: "Di Re", id: 1 },
    { name: "Catherine", lastName: "Poirier", id: 2 }
  ]);

  const [nextID, setNextID] = useState(3);

  const handleAddElement = element => {
    element.id = nextID;

    setElements(currentElements => {
      return [...currentElements, element];
    });

    setNextID(nextID + 1);
  };

  const handleDeleteElement = id => {
    setElements(currentElements =>
      currentElements.filter(element => element.id != id)
    );
  };

  return (
    <div className="App">
      <h1>React Basics tutorial by Adam Di Re</h1>
      <List data={elements} deleteElement={handleDeleteElement} />
      <Form addElement={handleAddElement} />
    </div>
  );
}

export default App;
