import React, { useRef } from 'react'

export default function ToDo({ todo, toggleTodo }) {
    const customCheckBox = useRef()

    function handleCustomCheckBox() {
        toggleTodo(todo.id)
    }
    return (
        <div className='todo-item' onClick={handleCustomCheckBox}>

            <div ref={customCheckBox} className='customCheckbox' >
                {todo.complete ? '\u2714' : null}
            </div>
            <label className={todo.complete ? 'completed' : null}  >
                {/* <input type='checkbox' checked={todo.complete} onChange={handleTodoToggle} /> */}
                {todo.name}
            </label>
        </div>
    )
}
