import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [taskText,settaskText]=useState(""); 

    const handleSubmit=(e)=>{
        e.preventDefault();

        if(taskText.trim() !=="")
        {
            addTask(taskText);
            settaskText("");
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={taskText}
            onChange={(e)=>settaskText(e.target.value)}
            placeholder='enter task'/>

            <button type="submit">ADD Task </button>

        </form>
    </div>
  )
}

export default TaskForm