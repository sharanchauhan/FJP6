import { Component } from "react";

class Todo extends Component
{
    constructor()
    {
        super();
        this.state={
            tasks:[],
            currTask:""
        }
    }

    handleChange=(e)=>{
        this.setState({
            currTask:e.target.value
        })
    }

    handleAddTask=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask:""
        })
    }

    handleDelete=(id)=>{
        let narr=this.state.tasks.filter((taskObj)=>{
            return taskObj.id!==id;
        });
        this.setState({
            tasks:[...narr]
        })
    }

    render(){
        return(
            <div class="main">
                <div class="nav">
                    <input type="text" value={this.state.currTask} onChange={this.handleChange} class="textbox"></input>
                    <button onClick={this.handleAddTask} class="addbtn">Add Task</button>
                </div>
                <div class="tasks">
                    <ul>
                        {this.state.tasks.map((taskObj)=>(
                            <li key={taskObj.id} class="ulist">
                                <button onClick={()=>this.handleDelete(taskObj.id)} class="deletebtn">Delete</button>
                                <p class="taskContent">{taskObj.task}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Todo;