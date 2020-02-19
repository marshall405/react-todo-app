import React, { useRef } from 'react'
import ToDo from './ToDo'
export default function ToDoList({ todos, toggleTodo, selectAll, isChecked }) {
    const customCheckBox = useRef()
    return (
        <>
            <div className='custom-check-box-container'>
                <div ref={customCheckBox} className={todos.length > 1 ? 'customCheckbox' : 'hide'} onClick={selectAll}>
                    {isChecked ? '\u2714' : null}
                </div>
                <p className={todos.length > 1 ? '' : 'hide'}>check all</p>
            </div>
            <div className='todo-container'>
                {
                    todos.map(todo => {
                        return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
                    })
                }
            </div>
        </>
    )
}




