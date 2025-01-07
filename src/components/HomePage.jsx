import { useState } from "react";
import { Task } from "./task"

export const HomePage = () =>{

    const [input,setInput] = useState("");
    const [task,setTask] = useState([]);

    const submitHandler = (e)=>{
        e.preventDefault();
        console.log(input);
        
        if(!input) return ;
        if(task.includes(input)){
            setInput("");
            return;
        } ;

        setTask((preTask)=>[...preTask, input])
        console.log(task);
        
        setInput("");
    }

    const handleDelete = (curr)=>{
       const updatedTask = task.filter((e)=> e != curr )
       setTask(updatedTask);
    }

    const handleAllDelete = () =>{
        setTask([]);
    }

    const handleEdit = (curr) =>{
        setInput(curr);
        const deleteTask = task.filter((e)=> e != curr)
        setTask(deleteTask);
    }

    return (
        <>
        <div className="input flex flex-col gap-3">
        <form onSubmit={(e)=>submitHandler(e)}>
        <input className="px-4 py-2 outline-none capitalize bg-slate-900 text-white" type="text" placeholder="Add Task" 
        value={input} onChange={(e)=>setInput(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 text-white">Add</button>
        </form> 
        <div> 
            {
                task.map((curr,index)=>{
                    return <div key={index} className="px-5 py-3 text-xl bg-slate-500 flex justify-between mt-5">
                        <p className="text-white capitalize">{curr}</p>
                        <button className="text-green-500" onClick={()=>handleEdit(curr)}>Edit</button>
                        <button className="text-red-800" onClick={()=>handleDelete(curr)}>Delete</button>
                        </div>
                })
            }
        </div>
        {
            task.length>0 &&
        <button onClick={handleAllDelete} className="bg-red-600 px-4 py-2 text-white">Delete All Task</button>
        }
        {
            task.length==0 &&
        <p className="text-white text-center text-2xl">No Task Yet</p>
        }
        </div>
        </>
    )
}