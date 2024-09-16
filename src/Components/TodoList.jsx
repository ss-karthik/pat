import React, {useState} from 'react'
import Modal from './Modal'

const TodoList = (props) => {
  
  return (
    <div className='container mx-auto p-4'>
      <ul className='todo-list  flex flex-col gap-3'>
        {props.todos.length === 0 && "No Todos"}
        {props.todos.map(todo => {
          return (
            <li key={todo.id} className='border border-white px-5 rounded-md'>
              <div className='flex flex-wrap items-center justify-between gap-5 pt-2'>
              <input className='w-5 h-5 mr-2 text-white' type='checkbox' checked={todo.completed} onChange={e => props.completeItem(todo.id, e.target.checked)}></input>
              <div className='text-white flex-grow whitespace-normal text-2xl'>{todo.title}</div>
              <button className='delete-btn add border border-white text-white p-2 rounded-xl' onClick={() => props.deleteItem(todo.id)}>Delete</button>
              </div>
              <Modal todo={todo} updateNotes={props.updateNotes}/>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodoList
