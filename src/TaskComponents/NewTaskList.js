import TaskItem from "./TaskItem";

function NewTaskList({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  const newTasks = tasks.filter((task) => task.isCompleted === false);

  return (
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
  );
}

export default NewTaskList;
