import React from "react";

export default class NewTask extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            taskName: '',
            lead: '',
            date: '',
        }
    }

    handleNameChange = (e) => {
        let taskName = e.target.value
        this.setState({taskName: taskName})

    }
    handleLeadChange= (e) =>{
        let leadName = e.target.value
        this.setState({lead: leadName})

    }
    handleDateChange = (e) => {
        let date = e.target.value
        this.setState({date: date})

    }
    createTask = () =>{
        const task = {
            name: this.state.taskName,
            lead: this.state.lead,
            date: this.state.date,
            complete: false
        }
        if(task.name !== '' && task.lead !== '' && task.date !== ''){
        this.props.newTask(task)
        }
        this.setState({
            taskName: '',
            lead: '',
            date: ''
        })
    }

    render(){
        return(
            <div id="new-task" className="pb-3">
            <h2>Task List</h2>
            <div className="row">
              <div className="col-sm">
                <input type="text" id="task-name" className="form-control" placeholder="Task" 
                onChange={this.handleNameChange} value={this.state.taskName}/>
              </div>
              <div className="col-sm">
                <input type="text" id="task-lead" className="form-control" placeholder="Whos doing this task ..." 
                onChange={this.handleLeadChange} value={this.state.lead}/>
              </div>
              <div className="col-sm">
                <input type="date" id="task-date" className="form-control" placeholder="Date to be completed:" 
                onChange={this.handleDateChange} value={this.state.date}/>
              </div>
            </div>
            <button id="new-task-button" className="btn btn-primary form-control mt-1" 
            onClick={this.createTask}>Add New Task</button>
          </div>
        )
    }
}