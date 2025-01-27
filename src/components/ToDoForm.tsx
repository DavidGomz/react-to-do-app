import React, { Dispatch, SetStateAction, useState } from 'react'
import ToDoService from '../ToDoService'
import ToDoTypes from '../todo'
import '../CSS/TodoForm.css'

interface PropTypes {
    setTodos: Dispatch<SetStateAction<ToDoTypes[]>>
}

const ToDoForm: React.FC<PropTypes> = ({setTodos}) => {
    const [newTodoText, setNewTodoText] = useState<string>("");

    const handleAddTodo = () => {
        if(newTodoText.trim() !== "") {
            const newTodo = ToDoService.addTodos(newTodoText)
            setTodos((prevTodo) => [...prevTodo, newTodo]);
            setNewTodoText("");
        }
    }

  return (
    

    <div className='inputForm'>
        <input type="text" name="" id="" value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} autoFocus={true} placeholder='Add a Task' />
        <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  )
}

export default ToDoForm