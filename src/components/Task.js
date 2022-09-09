import React, { useState } from "react";

export const Task = (props) => {
    const { task, deleteTask, updateTask,} = props
    const [style, setStyle] = useState("")

    const changeStyle = () => {
        console.log('complete task')
        setStyle('completed')
        task.complete = true
        updateTask(task)
    }
    if(!task.complete)
    {
        console.log('rendering tasks')
        return(
            <div className={style} id ="newtask">
                <div id={task.key} key={task.key} className="mb-3 pb-3">
                    <div className="row shadow border pb-3">
                        <div className="col">
                            <h3>{task.name}</h3>
                        </div>
                        <div>
                            <p>Person Completing Task: {task.lead}</p>
                            <p>Task Due Date: {task.date}</p>
                        </div>
                        <div className="col text-center pt-2">
                            <button className="btn btn-success" onClick={changeStyle}>Complete Task</button>
                            <button className="btn btn-danger" onClick={(e) => deleteTask(task._id)}>Remove Task  </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        console.log('rendering tasks')
        return(
            
                <div id={task.key} key={task.key} className="mb-3 pb-3 row shadow border">
                    <div className="completed-row">
                        <div className="col">
                            <h3>{task.name}</h3>
                        </div>
                        <div className='completed-info'>
                            <p>Person Who Completed Task: {task.lead}</p>
                            <p>Task Completed On: {task.date}</p>
                        </div>
                        </div>                 
                        <div>
                        <p className="text text-success"><b>Task Completed</b></p>
                        <button className="btn btn-danger" onClick={(e) => deleteTask(task._id)}>Remove Task</button>
                    </div>
                </div>
        )

    }
}