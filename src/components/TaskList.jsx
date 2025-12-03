import React from "react";

function TaskList({ tasks, onEdit, onDelete }) {
  return (
    <ul>
      {tasks.map((t) => (
        <li key={t.id}>
          {t.title} - <b>{t.status}</b>
          <button onClick={() => onEdit(t.id)}>Edit</button>
          <button onClick={() => onDelete(t.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
