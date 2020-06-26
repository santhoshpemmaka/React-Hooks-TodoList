import React from "react";
import "./styles.css";
import TodoFrom from "./components/TodoForm";

export default function App() {
  return (
    <div className="App">
      <h1> Todos </h1>
      <TodoFrom />
    </div>
  );
}
