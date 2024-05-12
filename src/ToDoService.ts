import ToDoTypes from "./todo";

const LOCAL_STORAGE_KEY = 'todos';

const ToDoService = {
    getTodos: (): ToDoTypes[] => {
        const toDoStr = localStorage.getItem(LOCAL_STORAGE_KEY)

        return toDoStr ? JSON.parse(toDoStr) : [];
    },

    addTodos: (text: string): ToDoTypes => {
      const todos = ToDoService.getTodos();
      const newToDo: ToDoTypes  = {
        id: todos.length + 1,
        text,
        completed: false
      }

      const updateTodos = [...todos, newToDo];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateTodos));

      return newToDo;
    },

    updateTodo: (todo: ToDoTypes): ToDoTypes => {
        const todos = ToDoService.getTodos();

        const updateToDos = todos.map((t) => (t.id === todo.id ? todo : t));
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateToDos));
        return todo;

    },

    deleteTodo: (id: number): void => {
        const todos = ToDoService.getTodos();

        const updateToDos = todos.filter((t) => {
            if(t.id !== id)
                return t;
        });
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updateToDos));
    }
}

export default ToDoService;