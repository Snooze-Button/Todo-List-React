import React, {useState, useRef , useEffect} from 'react' /* useEffect is a hook , imported for saving Todo Lists*/
import TodoList from './TodoList'
import {v4 as uuidv4} from 'uuid'

//Variable for creating Key
const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  //Create an array 2 variables
  //TO is all the To Do List
  //setTodos are the update function
  const [todos, setTodos] =  useState([]) //object destructuring
  const todoNameRef = useRef() //var created to have access to the input element in todoNameRef variable 
 
  useEffect(() => {
   const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //JSON.parse conver string into an array
   if (storedTodos) setTodos(storedTodos) //If there are storedTodos than set the current Todos to the storedTodos
  }, []) //pass in empty array to call once 


  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos)) /* Save to local storage (key, converts JS value to JS string) */
  }, [todos]) /* Any time [array of todos] changes call this function to save */

  function toggleTodo(id){
    const newTodos = [...todos] //Copy to modify state variable todos
    const todo = newTodos.find(todo => todo.id === id) //find todo.id with id parameter
    todo.complete = !todo.complete //check/uncheck todo we clicked on
    setTodos(newTodos) //Reset Todo variable with new list of Todos
  }


  function handleAddTodo(e) {
      const name = todoNameRef.current.value //name var will be equal to current value in textbox
      if (name === '') return //return so there isnt empty todo
     // console.log(name) //name print in console for test

      setTodos(prevTodos =>{
        return [...prevTodos, { id: uuidv4(), name: name, complete: false}] /* uuidv4 imported function to generate random id */
      })

      todoNameRef.current.value = null //clears input in the textbox
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete) //newTodos var hold all uncheck Todo lists
    setTodos(newTodos) //current todo is set to newTodos with unchecked lists only
  }

  return (
    <>  
    <TodoList todos={todos} toggleTodo={toggleTodo}/>
    <input ref={todoNameRef} type="text" />
    <button onClick={handleAddTodo}>Add Todo</button>
    <button onClick={handleClearTodos}>Clear Completed Todos</button> {/* When clicked calls function on line 45 */}
    <div>{todos.filter(todo => !todo.complete).length} left to do</div> {/*Gets num of unchecked Todos */}
    </>
    //<> is a empty fragement 
  ) 
}




export default App;
