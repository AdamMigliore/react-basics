import React, { useState } from "react";
import FirstComponent from "./components/firstComponent";

function App() {
  const [elements, setElements] = useState([
    { name: "Thomas", lastName: "Di Re", id: 1 },
    { name: "Catherine", lastName: "Poirier", id: 2 }
  ]);

  return (
    <div className="App">
      <FirstComponent objects={elements} />
    </div>
  );
}

export default App;
