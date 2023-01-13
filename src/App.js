import './App.css';
import { useState } from 'react';



// const tasks array of tasks objects[]

//const tasksObjects id, title, isChecked: false, isDeleted: false
  //event handler to tack isChecked
  //event handler to track isDeleted
//form input with a clickable button. Event handler onClick adds a taskObject to the array


function App() {
  const [tasks, setTask] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTaskClick = () => {
    const newTask = {
      title: inputValue,
      isChecked: false,
      isDeleted: false
    };

    const newTaskArray = [...tasks, newTask];
    setTask(newTaskArray);
    setInputValue("");
  };

  const toggleChecked = (index) => {
    const newTaskArray = [...tasks];
    newTaskArray[index].isChecked = !newTaskArray[index].isChecked;
    setTask(newTaskArray);
  };

  return (
    <div className="App">
      <div className="task-container">
        <div className="add-task">
          <input
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            className="add-item-input"
            placeholder="Add a task..."
          ></input>
          <button onClick={handleAddTaskClick}>+</button>
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-container">
              <input
                type="checkbox"
                onChange={() => toggleChecked(index)}
              ></input>
              <label>{task.title}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

