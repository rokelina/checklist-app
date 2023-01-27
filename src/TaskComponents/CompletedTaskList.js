import TaskItem from "./TaskItem";

function CompletedTaskList({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  const completedTasks = tasks.filter((task) => task.isCompleted === true);

  return completedTasks.length !== 0 ? (
    <div className="completed-tasks-container">
      <label className="status-title">Completed</label>
      <button className="toggle">
        <span role="img" aria-label="down arrow">
          🔽
        </span>
      </button>
      <ul className="completed-tasks-list">
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
    </div>
  ) : null;
}

export default CompletedTaskList;
