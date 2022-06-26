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
            tasks:[...this.state.tasks,this.state.currTask],
            currTask:""
        })
    }
    render(){
        return(
            <div>
                <input type="text" value={this.state.currTask} onChange={this.handleChange}></input>
                <button onClick={this.handleAddTask}>Add Task</button>
                <ul>
                    {this.state.tasks.map((ele)=>(
                        <li>
                            <p>{ele}</p>
                            <button>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Todo;