import { useState } from "react";

//check - keeps track of the task name input value
//check - returns a task item that will be added to the task list when the action onAddTask fires

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
