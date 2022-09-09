import React, { Component, StrictMode } from "react";
import TaskList from './components/NewList'
import NewTask from "./components/HomePage";

class App extends Component{

  render(){  
      return(
          <div className="container">
            <StrictMode>  
              <TaskList />
            </StrictMode>
          </div>
      )
  }
}

export default App