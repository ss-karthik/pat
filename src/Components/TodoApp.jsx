import React, {useState, useEffect, useRef} from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../client';
import Cookies from 'js-cookie';
const TodoApp = ({token, setToken}) => {
  const[todos, setTodos] = useState([]);
  const isFirstRender = useRef(true);
  useEffect(()=>{
    const fetchTodos = async()=>{
      const { data, error } = await supabase
          .from('users')
          .select('todos')
          .eq('id', token.user.id);

      if (error) {
          console.log(error);
      } else if (data && data.length > 0) {
          console.log(data);
          await setTodos(data[0].todos);
      }
    }
    fetchTodos();
  }, [])

    const updateTodos = async ()=>{
      try {
        const { data, error } = await supabase
            .from('users')
            .select('todos')
            .eq('id', token.user.id);
  
        if (data && data.length === 0) {
            const { error: insertError } = await supabase
                .from('users')
                .insert([{ id: token.user.id, todos: todos }]);
  
            if (insertError) throw insertError;
        } else {
            const { error: updateError } = await supabase
                .from('users')
                .update({ todos: todos })
                .eq('id', token.user.id);
  
            if (updateError) throw updateError;
        }
        console.log('todo updated successfully!');
    } catch (error) {
        console.log(error);
        console.log('Error updating todo');
    }
    }
  
    useEffect(()=>{
      if (isFirstRender.current) {
        isFirstRender.current = false; // Skip the first render
        return;
      }
      if (todos.length >= 0) {
        updateTodos(); // Update todos in the database after the first render
      }
  
    }, [todos]);  
  let navigate = useNavigate();
  function handleLogout(){
      Cookies.remove('token');
      setToken(null);
      navigate('/')
  }
  
  function addItem(title){
     const newTodo = { id: crypto.randomUUID(), title: title, notes: "", completed: false } 
     setTodos([...todos, newTodo]);
  }

  function completeItem(id, completed){
    setTodos(todos.map(todo => (todo.id===id ? {...todo, completed} : todo)));
  }
  function deleteItem(id){
    setTodos(todos.filter(todo=> todo.id!=id))
  }
  function updateNotes(id, notes){
    setTodos(todos.map(todo=>(todo.id === id?{ ...todo, notes} : todo)));
  }
  console.log(todos);
  return (
    <div className='p-5 flex flex-col items-center'>
      <button className='self-end text-xl text-white border border-white px-2 py-1 rounded-md' onClick={handleLogout}>Logout</button>
      <h1 className='text-4xl text-white'>Todo List:</h1>
      <TodoInput addItem={addItem}/>
      <TodoList todos={todos} completeItem={completeItem} deleteItem={deleteItem} updateNotes={updateNotes}/>
    </div>
  )
}

export default TodoApp
