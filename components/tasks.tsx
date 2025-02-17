"use client";

import { useState } from "react";
import AddTask from "./add-task";

export default function Tasks() {
  const [tasks, setTasks] = useState<string[]>([]);

  function handleEdit(index: number) {
    const newName = prompt("Enter new task name", tasks[index]);
    if (newName) {
      const newTasks = tasks.map((task, i) => (i === index ? newName : task));
      setTasks(newTasks);
    }
  }
  function handleDelete(index: number) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }
  return (
    <div className="space-y-4">
      <AddTask addTask={setTasks} />
      <h2 className="font-semibold text-2xl text-blue-500">Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between">
            {task}
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="bg-blue-500 text-white p-2 rounded-lg w-16"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white p-2 rounded-lg w-16"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
