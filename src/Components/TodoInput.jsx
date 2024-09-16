import React ,{useState} from 'react'


const TodoInput = (props) => {
    const[newTask, setNewTask] = useState("");
    const handleNewTask = (e) => {
        setNewTask(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addItem(newTask);
        setNewTask("") 
      }
    return (
    <div>
      <form onSubmit={handleSubmit} className='input flex flex-wrap gap-5 p-5 justify-center'>
        <input  type='text' value={newTask} onChange={handleNewTask} id='todobox' className='text-xl text-white  border border-white px-2 py-1 rounded-md'/>
        <button type='submit' className='add text-3xl text-white'>+</button>
      </form>
    </div>
  )
}

export default TodoInput
