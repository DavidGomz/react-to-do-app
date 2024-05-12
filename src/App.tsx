import {FaPen, FaClipboardList } from 'react-icons/fa';
import ToDoList from './components/ToDoList';
import "./CSS/App.css"

function App() {

  return (
    <div className="App">
      <div className="header">
        <div className="logoside">
            <FaPen />
            <h1>What To Do</h1>
            <FaClipboardList />
        </div>
      </div>
      <ToDoList />
    </div>
  )
}

export default App
