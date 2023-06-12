import React, { useState } from 'react';
import './App.css'

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue !== '') {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');
    }
  };

  const handleToggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className='heading-section'>
      <h2>Todo List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a todo"
        style={{width:"300px", padding:"5px"}}
      />
      <button onClick={handleAddTodo} style={{padding:"5px", fontSize:"12px"}}>Add Todo</button>
      <div className='list'>
      <div style={{marginTop:"20px"}}>
        {todos.map((todo, index) => (
        <div style={{width:"40vw", display:"flex", justifyContent:"space-between", marginTop:"10px"}}>
          <div
            key={index}
            className='list-div'
            style={{ textDecoration: todo.completed ? 'line-through' : 'none'}}
          >
            <span>{todo.text}</span>
            <div>
            <button onClick={() => handleToggleTodo(index)}>completed</button>
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
    
            
          </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default TodoList;
