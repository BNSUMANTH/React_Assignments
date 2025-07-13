import React, { useState,useRef } from 'react'


export const Tasks = () => {
    const [tasks,setTasks]=useState([]);
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const titleRef=useRef();

    function addTask(){
        if(title=="") return ;
        const newTask={
            id:Date.now(),
            title:title,
            description:desc,
            done:false
        };
        setTasks([...tasks,newTask]);
        setTitle("");
        setDesc("");
    }

  return (
    <div>
        <h3>Tasks</h3>
        <form onSubmit={addTask}>
            <input ref={titleRef} value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Title'/><br/>
            <input value={desc} onChange={(e)=>setDesc(e.target.value)}  placeholder='Description'/><br/>
            <button>Add</button>
        </form>
        <ul>
            {tasks.map((task,ind)=>(
                <li>
                <span></span>
                    <input type="checkbox" checked={task.done} onChange={()=>toggleDone(task.id)}/>
                    <span>{task.title}{task.description}</span>
                </li>
            ),0)}
        </ul>
    </div>
  )
}
