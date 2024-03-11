import React, { useState } from "react";

const Task = () => {
  const [taskName, setTaskName] = useState<any>();

  return (
    <form>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="New task..."
      />
    </form>
  );
};

export default Task;
