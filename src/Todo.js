import React from 'react'

//rfc to generate boiler plate code

export default function Todo( {todo , toggleTodo} ) /*passing todo {element}*/ {
    function handleTodoClick(){
        toggleTodo(todo.id) //OnChange calls toggleTodo function with todo id as arguement
    }

    return (
        <div>
            <label>
           <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} /> {/*Adds checkbox before name , everytime user clicks calls onChange*/}    
          {todo.name }  {/* Prints name  //Shift alt a for comment shotcut */}
       </label> </div>
    )
}
