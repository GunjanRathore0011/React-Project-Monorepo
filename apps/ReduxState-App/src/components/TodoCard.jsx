import React, { useState } from 'react'

const TodoCard = ({ todo }) => {
    // console.log(todo.completed);

    return (
        <div className='flex gap-5 bg-gray-300 px-3 py-4 justify-between rounded-full'>

            <p>{todo.id}</p>
            <p>{todo.title}</p>
            {todo.completed ? <p>Completed</p> : <p>Pending</p>}

        </div>
    )
}

export default TodoCard