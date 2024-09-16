import React, { useState } from 'react'
import { SquareChevronDown, SquareChevronUp } from 'lucide-react';
const Modal = ({ todo, updateNotes }) => {
    
    const [notes, setNotes] = useState(todo.notes || "");
    
    const handleNotes = (e)=>{
        const newnote = e.target.value;
        setNotes(newnote);
        updateNotes(todo.id, newnote);
    }
    const [modal, setModal] = useState(false);
    const toggleModal = ()=>{
      setModal(!modal);
    }
    console.log(modal);
    if(modal){
        document.body.classList.add('active-modal');
    } else {
        document.body.classList.remove('active-modal');
    }
  return (
    <div className='flex flex-col py-2'>
      <button className=' text-white self-end' onClick={toggleModal}>
        {modal ? <SquareChevronUp /> : <SquareChevronDown/>}
      </button>
      {modal && (
        <div className='flex justify-center py-2'>
          <textarea placeholder='Notes...' value={notes} onChange={handleNotes} className='w-full h-32 border border-slate-500 text-white'></textarea>
        </div>
      )}
    </div>
  )
}

export default Modal
