import './App.css';
import { useState } from 'react';

//event handler to tack isChecked
//event handler to track isDeleted
//form element wrapping an input field. Event handler onSubmit creates an adds a newTask object to the tasks array
// const tasks is an array of task objects

function App() {
  
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTask] = useState([]);
  
  const handleCreateTask = (e) => {
    e.preventDefault();
    
    const newTask = {
      title: inputValue,
      isChecked: false,
    };

    const newTaskArray = [...tasks, newTask];
    setTask(newTaskArray);
    setInputValue("");
    console.log(newTaskArray)
  };
  
  const handleCheckButton = (index) => {
    const newTaskArray = [...tasks];
    newTaskArray[index].isChecked = !newTaskArray[index].isChecked;
    setTask(newTaskArray);
    console.log(newTaskArray)
  };

  const deleteHandler = (index) => {
    const newTaskArray = [...tasks];
    newTaskArray[index].isDeleted = !newTaskArray[index].isDeleted;
    newTaskArray.splice(index,1);
    setTask(newTaskArray);
    console.log(newTaskArray)
  };

  return (
    <div className="App">
      <h2 className='app-title'>My checklist</h2>
      <div className="task-container">
        <div className="add-task">
          <form onSubmit={handleCreateTask}>
            <input
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              className="add-item-input"
              placeholder="Add a task..."
            ></input>
          </form>
        </div>
        <div className="task-list">
          {tasks.map((task, index) => (
            <div key={index} className="task-item">
              <label>{task.title}</label>
              <button className='button'
              onClick={() => handleCheckButton(index)}>
              {!task.isChecked ? "Mark As ✅" : "Checked ✔️"}
              </button>
              <button onClick={() => deleteHandler(index)}>🗑</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

