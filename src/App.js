import "./App.css";
import { useEffect, useState } from "react";
import AddNewTask from "./AddNewTask";
import TaskList from "./TaskList";
//event handler to tack isChecked
//event handler to track isDeleted
//form element wrapping an input field. Event handler onSubmit creates an adds a newTask object to the tasks array
// const tasks is an array of task objects

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleCreateTask = function (inputValue) {
    setTasks([
      ...tasks,
      {
        id: startId++,
        title: inputValue,
        isChecked: false,
        isDeleted: false,
        dateCreated: null,
        dateCompleted: null,
        dateDeleted: null,
      },
    ]);
  };

  const handleEditTask = function (task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  const handleDoneTask = function (task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  };

  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }

  return (
    <div className="App">
      <h2 className="app-title">My checklist</h2>
      <AddNewTask onAddTask={handleCreateTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDoneTask={handleDoneTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
let startId = 0;
export default App;
