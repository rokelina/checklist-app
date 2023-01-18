import TaskItem from "./Task";
import "./TaskList.css";

function TaskList({ tasks, onEditTask, onDoneTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onEdit={onEditTask}
            onDone={onDoneTask}
            onDelete={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
