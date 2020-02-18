import React, { useState, useRef, useEffect } from 'react';

import ToDoList from './ToDoList'
import './styles/app.css'

const LOCAL_STORAGE_KEY = 'todo.list'
function random() {
  return Math.random()
}
function App() {
  const [todos, setTodos] = useState([])
  const [isChecked, changeChecked] = useState(false)
  const todoNameRef = useRef()

  useEffect(() => {
    // called only once to load in any saved todos from local storage 
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    // update local storage when our state changes -- list of todos 
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function handleAddTodo() {
    // Retrieve value in input, add to state, clear input value
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {
        id: random(),
        name: name,
        complete: false
      }]
    })
    todoNameRef.current.value = ''
  }
  function handleKey(event) {
    // keyCode 13 = 'Enter'
    if (event.keyCode === 13) {
      handleAddTodo()
    }
  }
  function toggleTodo(id) {
    // if todo item is not checked, check it. Else uncheck item
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleCompleteItems() {
    const clearedTodos = todos.filter(todo => !todo.complete)
    changeChecked(false)
    setTodos(clearedTodos)
  }
  function selectAll() {
    const completeAllTodos = [...todos]
    completeAllTodos.forEach(todo => {
      if (isChecked) {
        todo.complete = false
      } else {
        todo.complete = true
      }
    })
    changeChecked(isChecked ? false : true)
    setTodos(completeAllTodos)
  }
  return (
    <div className="App">
      <input ref={todoNameRef} type='text' placeholder='to do item' onKeyDown={handleKey} />
      <div className='button-container'>
        <button onClick={handleAddTodo}>add item</button>
        <button onClick={handleCompleteItems}> clear complete </button>
      </div>
      <div className='total-items'>{todos.length} items</div>
      <ToDoList todos={todos} toggleTodo={toggleTodo} selectAll={selectAll} isChecked={isChecked} />

    </div>
  );
}

export default App;
