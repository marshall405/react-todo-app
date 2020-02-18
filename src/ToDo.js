import React from 'react'

export default function ToDo({ todo, toggleTodo }) {
    function handleTodoToggle(e) {
        toggleTodo(todo.id)
    }
    return (
        <div className='todo-item'>
            <label>
                <input type='checkbox' checked={todo.complete} onChange={handleTodoToggle} />
                {todo.name}
            </label>
        </div>
    )
}
