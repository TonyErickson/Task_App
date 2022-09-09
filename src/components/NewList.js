import React, { Component } from "react";
import { Task } from './Task'
import { DataApi } from '../rest/DataApi'
import NewTask from "./HomePage";

export default class TaskList extends Component{
    state = {
        tasks: []
    }

    componentDidMount(){
        console.log(`Component Did Mount`)
        this.fetchTasks()
    }

    fetchTasks = async () => {
        console.log('Fetching')
        const tasks = await DataApi.get()
        tasks.sort((a,b) => (a.date > b.date) ? 1 : -1)
        this.setState({tasks})
        console.log({tasks})
    }

    updateTask = async (taskToUpdate) => {
        console.log('updating')
        await DataApi.put(taskToUpdate)
        this.fetchTasks();
    }

    deleteTask = async (taskId) => {
        console.log('deleting')
        await DataApi.delete(taskId)
        this.fetchTasks()
    }

    newTask = async (task) =>{
        console.log('Create New task')
        await DataApi.post(task)
        this.fetchTasks()
    }



    render(){
        console.log('render task list')
        return(
            <div>
                <NewTask newTask={this.newTask}/>
                {this.state.tasks.map((task) => (
                    <Task
                        task={task}
                        key={task._id}
                        updateTask={this.updateTask}
                        deleteTask={this.deleteTask}
                    />))}
            </div>
        )
    }
}