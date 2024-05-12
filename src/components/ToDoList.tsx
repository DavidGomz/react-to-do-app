import React, { ReactElement, useState } from 'react'
import ToDoTypes from '../todo'
import ToDoService from '../ToDoService'
import { FaEdit, FaCheck } from 'react-icons/fa'
import { GiCancel } from 'react-icons/gi'
import { RiDeleteBin5Fill } from 'react-icons/ri'
import ToDoForm from './ToDoForm'
import '../CSS/TodoList.css'

const ToDoList = () => {
    const [todos, setTodos] = useState<ToDoTypes[]>(ToDoService.getTodos());
    const [editingTodoId, setEditedTodoId] = useState<number | null>(null);
    const [editedTodoText, setEditedTodoText] = useState<string>("")

    const handleEditStart = (id: number, text: string) => {
        setEditedTodoId(id);
        setEditedTodoText(text);
        
    }

    const handleEditCancel = () => {
        setEditedTodoId(null);
        setEditedTodoText("");
    }

    const handleEditSave = (id: number) => {
        if(editedTodoText.trim() !== '') {
            const updateTodo = ToDoService.updateTodo({
                id,
                text: editedTodoText,
                completed: false
            });
            setTodos((prevTodos) => prevTodos.map((todo) => (todo.id === id ? updateTodo : todo)));
            
            setEditedTodoId(null);
            setEditedTodoText("");
        }
    }

    const handleDeleteTodo = (id: number) => {
        ToDoService.deleteTodo(id);
        setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
    }

  
    return (
        <div className='todoContainer'>
            <div>
                <ToDoForm setTodos={setTodos} />
            </div>
            <div className="todos">
                {todos.map((todo: ToDoTypes): any => (
                    <div className='items' key={todo.id}>
                        {editingTodoId == todo.id ? (
                            <div className="editText">

                                <input type="text" name="" id="" value={editedTodoText} onChange={(e) => setEditedTodoText(e.target.value)} autoFocus={true} />

                                <button onClick={() => handleEditSave(todo.id)}>
                                    <FaCheck />
                                </button>

                                <button className='cancelBtn' onClick={() => handleEditCancel()}>
                                    <FaEdit />
                                </button>

                            </div>
                            ) : (
                                <div className="editBtn">
                                    <span>{todo.text}</span>
                                    <button onClick={() => handleEditStart(todo.id, todo.text)}>
                                        <GiCancel />
                                    </button>
                                </div>
                            )
                        }

                        <button onClick={() => handleDeleteTodo(todo.id)}>
                            <RiDeleteBin5Fill />
                        </button>
                    </div>
                ))}
            </div>
            
        </div>
    )
}

export default ToDoList