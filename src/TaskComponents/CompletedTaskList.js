import TaskItem from "./TaskItem";

function CompletedTaskList({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  const completedTasks = tasks.filter((task) => task.isCompleted === true);
  return completedTasks.length !== 0 ? (
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
  ) : null;
}

export default CompletedTaskList;
