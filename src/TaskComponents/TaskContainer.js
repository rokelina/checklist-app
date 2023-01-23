import TaskItem from "./TaskItem";
import "./TaskContainer.css";

function TaskContainer({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  const newTasks = tasks.filter((task) => task.isCompleted === false);
  const completedTasks = tasks.filter((task) => task.isCompleted === true);

  return (
    <div className="list-container">
      <ul className="new-tasks">
        {newTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEditTask}
            onDone={onDoneTask}
            onDelete={onDeleteTask}
          />
        ))}
      </ul>
      {completedTasks.length !== 0 ? (
        <ul className="completed-tasks">
          <label>Completed</label>
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onEdit={onEditTask}
              onDone={onDoneTask}
              onDelete={onDeleteTask}
            />
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default TaskContainer;
