import { useState } from "react";

//keeps track of the task name input value
//returns a task item that will be added to the task list when the action onAddTask fires

function AddNewTask({ onAddTask }) {
  const [taskName, setTaskName] = useState("");
  //write function to prevent empty tasks to be created
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        className="add-item-input"
        placeholder="Add a task..."
      />
      <button
        onClick={() => {
          if (taskName.trim() !== "") {
            setTaskName("");
            onAddTask(taskName);
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
