import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Tasks from "./component/Tasks";
function App() {
  return (
    <div>
      <h1>Task Management </h1>
      <Tasks />
    </div>
  );
}

export default App;
