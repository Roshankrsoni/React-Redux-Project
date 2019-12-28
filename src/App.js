import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  // window.navigator.geolocation.getCurrentPosition(
  //   position => console.log(position),
  //   err => console.log(err)
  // );

  return <div className="App">Hello Bro</div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
