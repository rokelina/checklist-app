import { useState } from "react";
import classNames from "classnames";

function TaskItem({ task, onEdit, onDone, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        <button className="edit-button" onClick={() => setIsEditing(false)}>
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
          className={classNames("edit-button", { "mouse-hover": isHovered })}
          onClick={() => setIsEditing(true)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
      >
        {!task.isCompleted ? "⬜️ Check" : "✅ Done!"}
      </button>
      <button className="delete-button" onClick={() => onDelete(task.id)}>
        <span role="img" aria-label="delete-trash-sign">
          🗑
        </span>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
