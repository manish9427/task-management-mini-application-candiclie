import React, { useState } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Filter from "./components/Filter";
import "./App.css";

function App() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [filter, setFilter] = useState("All");

  const addTask = (task) => setTasks([...tasks, task]);

  const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  const editTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    const newTitle = prompt("Edit task:", task.title);
    const newStatus = prompt("Edit status (Pending/In-Progress/Completed):", task.status);
    if (newTitle) task.title = newTitle;
    if (["Pending", "In-Progress", "Completed"].includes(newStatus)) task.status = newStatus;
    setTasks(tasks.map((t) => (t.id === id ? task : t)));
  };

  const filteredTasks =
    filter === "All" ? tasks : tasks.filter((t) => t.status === filter);

  return (
    <div>
      <h2>Task Manager</h2>
      <TaskForm onAdd={addTask} />
      <Filter current={filter} onChange={setFilter} />
      <TaskList tasks={filteredTasks} onEdit={editTask} onDelete={deleteTask} />
    </div>
  );
}

export default App;
