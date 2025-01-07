export const Task = ({props}) =>{

    const handleDelete = (e)=>{
        task.filter((curr)=> setTask(curr != e.target ))
    }

    return (
        <div className="px-5 py-3 text-xl bg-slate-500 flex justify-between mt-10">
        <p>{props}</p>
        <button onClick={(e)=>handleDelete(e)}>Delete</button>
        </div>
    )
}