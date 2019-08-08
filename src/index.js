import React from "react";
import ReactDOM from "react-dom";
import ImageResizer from "./ImageResizer.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <ImageResizer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
