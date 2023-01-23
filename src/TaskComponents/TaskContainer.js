import TaskItem from "./Task";
import "./TaskContainer.css";

function TaskContainer({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  return (
    <div className="list-container">
      {tasks.map((task) => (
        <div className="task-item" key={task.id}>
          <TaskItem
            task={task}
            onEdit={onEditTask}
            onDone={onDoneTask}
            onDelete={onDeleteTask}
          />
        </div>
      ))}
    </div>
  );
}

export default TaskContainer;
