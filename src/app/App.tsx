import React from "react";

// styles
import "../styles/App.css";

// components
import Task from "../component/Task";
import TaskSelect from "../component/TaskSelect";

function App() {
  return (
    <div>
      <Task />
      <TaskSelect />
      <TaskSelect />
      <TaskSelect />
      <TaskSelect />
    </div>
  );
}

export default App;
