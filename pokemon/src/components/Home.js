import React from "react";

export default function Home() {

    const home_par = "Welcome to my page! We will be learning some more React soon!";

  return (
    <div className="container">
      <h3 className="center black-text">Home</h3>
      <p className="card black-text lighten-2" style={ {padding: 20}}>{home_par}</p>
    </div>
  );
}
