import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
    return (
        //map  over all the todo array
                           
        todos.map(todo => { //for each one of todo
        return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />//return a todo element
        //make sure key is unique
        })
)
}