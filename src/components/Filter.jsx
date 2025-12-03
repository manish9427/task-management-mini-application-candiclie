import React from "react";

function Filter({ current, onChange }) {
  const statuses = ["All", "Pending", "In-Progress", "Completed"];
  return (
    <div>
      {statuses.map((s) => (
        <button
          key={s}
          style={{ fontWeight: current === s ? "bold" : "normal" }}
          onClick={() => onChange(s)}
        >
          {s}
        </button>
      ))}
    </div>
  );
}

export default Filter;
