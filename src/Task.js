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
        <button className="edit-button" onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button className="edit-button" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div>
      <label>
        {taskContent}
        <button
          className="check-button"
          onClick={() => {
            onDone({ ...task, isChecked: !task.isChecked });
          }}
        >
          {!task.isChecked ? "Mark Done" : "✔️Done"}
        </button>
        <button className="delete-button" onClick={() => onDelete(task.id)}>
          <span role="img" aria-label="delete-sign-x">
            ❌
          </span>
          Delete
        </button>
      </label>
    </div>
  );
}

export default TaskItem;
