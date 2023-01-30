import "./App.css";
import { useEffect, useReducer } from "react";
import AddNewTask from "./TaskComponents/AddNewTask";
import TaskContainer from "./TaskComponents/TaskContainer";
import NavBar from "./TaskComponents/NavBar";
import tasksReducer from "./reducer";

function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  // //added a useEffect to check the changes to [tasks]
  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleCreateTask = function (inputValue) {
    dispatch({
      type: "added",
      id: startId++,
      title: inputValue,
    });
  };

  const handleEditTask = function (task) {
    dispatch({
      type: "edited",
      task: task,
    });
  };

  const handleDoneTask = function (task) {
    dispatch({
      type: "completed",
      task: task,
    });
  };

  const handleDeleteTask = function (taskId) {
    dispatch({
      type: "deleted",
      id: taskId,
    });
  };

  return (
    <div className="App">
      <NavBar />
      <div className="card">
        <AddNewTask onAddTask={handleCreateTask} />
        <TaskContainer
          tasks={tasks}
          onEditTask={handleEditTask}
          onDoneTask={handleDoneTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </div>
  );
}
let startId = 0;
export default App;
