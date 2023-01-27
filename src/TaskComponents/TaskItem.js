import { useState } from "react";

function TaskItem({ task, onEdit, onDone, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleHover(event) {
    event.target.classList.add("mouse-hover");
  }
  function removeHover(event) {
    event.target.classList.remove("mouse-hover");
  }

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="edit-form"
          value={task.title}
          onChange={(e) => {
            onEdit({ ...task, title: e.target.value });
          }}
        />
        <button
          className="edit-button"
          onClick={() => setIsEditing(false)}
          onMouseEnter={(e) => handleHover(e)}
          onMouseLeave={(e) => removeHover(e)}
        >
          <span role="img" aria-label="save-sign">
            💾
          </span>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.title}
        <button
          className="edit-button"
          onClick={() => setIsEditing(true)}
          onMouseEnter={(e) => handleHover(e)}
          onMouseLeave={(e) => removeHover(e)}
        >
          <span role="img" aria-label="pencil-sign">
            ✏️
          </span>
          Edit
        </button>
      </>
    );
  }
  return (
    <li className="task-item">
      <label>{taskContent}</label>
      <button
        className="check-button"
        onClick={() => {
          onDone({ ...task, isCompleted: !task.isCompleted });
        }}
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={(e) => removeHover(e)}
      >
        {!task.isCompleted ? "⬜️ Check" : "✅ Done!"}
      </button>
      <button
        className="delete-button"
        onClick={() => onDelete(task.id)}
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={(e) => removeHover(e)}
      >
        <span role="img" aria-label="delete-trash-sign">
          🗑
        </span>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
