import { useState } from "react";

//sets the task title
//throws an alert if title is empty

function AddNewTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="add-form"
    >
      <input
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Add a task..."
        className="add-task"
      />
      <button
        className="add-button"
        onClick={() => {
          if (taskName.trim() !== "") {
            setTaskName("");
            onAddTask(taskName);
            console.log(taskName);
          } else {
            alert("Cannot create empty task");
          }
        }}
      >
        <span role="img" aria-label="add-sign">
          ➕
        </span>
      </button>
    </form>
  );
}

export default AddNewTask;
