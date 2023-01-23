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
    >
      <input
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        className="add-task"
        placeholder="Add a task..."
      />
      <button
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
        Add
      </button>
    </form>
  );
}

export default AddNewTask;
