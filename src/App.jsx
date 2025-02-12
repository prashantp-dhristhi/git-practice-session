import { useState } from 'react';
import './App.css'
import Myform from './pages/Myform';
import Task from './pages/Task';
import TaskForm from './pages/TaskForm';
 
const App = () => {
  const[tasks,setTasks]=useState([])
  const [filter,setFilter]=useState("all");


  const addTask=(text)=>{
    setTasks([...tasks,{id:Date.now(),text,completed: false}])
  }

  const toggleTask =(id)=>{
    setTasks(tasks.map((task)=>
    task.id===id?{...task ,completed: !task.completed}: task))

  }


  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const filteredTasks =
    filter === "completed"
      ? tasks.filter((task) => task.completed)
      : filter === "pending"
      ? tasks.filter((task) => !task.completed)
      : tasks;

        
  

  return (
    <div>
   {/* <Myform/> */}
   <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("pending")}>Pending</button>
      </div>
      <div className="task-list">
        {filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  )
}



export default App
