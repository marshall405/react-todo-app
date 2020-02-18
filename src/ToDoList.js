import React from 'react'
import ToDo from './ToDo'
export default function ToDoList({ todos, toggleTodo, selectAll, isChecked }) {
    return (
        <>
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
        </>
    )
}
