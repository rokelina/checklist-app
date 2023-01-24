import NewTaskList from "./NewTaskList";
import CompletedTaskList from "./CompletedTaskList";
import "./TaskContainer.css";

function TaskContainer({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  return (
    <div className="list-container">
      <NewTaskList
        tasks={tasks}
        onEditTask={onEditTask}
        onDoneTask={onDoneTask}
        onDeleteTask={onDeleteTask}
      />
      <CompletedTaskList
        tasks={tasks}
        onEditTask={onEditTask}
        onDoneTask={onDoneTask}
        onDeleteTask={onDeleteTask}
      />
    </div>
  );
}

export default TaskContainer;
