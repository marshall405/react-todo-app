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
                <p>check all</p>
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




{/* <>
<div className={todos.length > 1 ? 'checkAll' : 'checkAll hide'}>
    <input type='checkbox' checked={isChecked} onChange={selectAll} /> select all
</div>
<div className='todo-container'>

    {
        todos.map(todo => {
            return <ToDo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
        })
    }
</div>
</> */}