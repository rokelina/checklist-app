import { useState } from "react";

function TaskItem({ task, onEdit, onDone, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          value={task.title}
          onChange={(e) => {
            onEdit({ ...task, title: e.target.value });
          }}
        />
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <div>
      <label>
        {taskContent}
        <button
          className="button"
          onClick={() => {
            onDone({ ...task, isChecked: !task.isChecked });
          }}
        >
          {!task.isChecked ? "Mark As ✅" : "Checked ✔️"}
        </button>
        <button onClick={() => onDelete(task.id)}>🗑</button>
      </label>
    </div>
  );
}

export default TaskItem;
