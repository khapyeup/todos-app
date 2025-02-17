"use client";

import { useState } from "react";

type AddTaskProps = {
  addTask: React.Dispatch<React.SetStateAction<string[]>>
}

export default function AddTask(
  {addTask}: AddTaskProps
) {
  const [taskName, setTaskName] = useState("");

  function handleClick() {
    if (taskName) {
      addTask((prevTasks) => [...prevTasks, taskName]);
      setTaskName("");
    } else {
      alert("Type something");
    }
  }
  return (
    <div className="flex gap-3">
      <input
        className="border p-2 rounded-lg flex-1"
        type="text"
        placeholder="What you need to do?"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button
        onClick={handleClick}
        className="bg-blue-500 text-white rounded-lg p-2 "
      >
        Add Task
      </button>
    </div>
  );
}
