import { useEffect, useState } from 'react'
import TodoItem from './ui/TodoItem'
import TodoForm from './ui/TodoForm'
import { TodoProvider } from './context/TodoContext'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodos) => [{ id: Date.now() }, ...prevTodos])
  };

  const updateTodo = (id, updatedTodo) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) =>
        // todo.id === id ? { ...todo, ...updatedTodo } : todo
        todo.id === id ? updateTodo : todo);

      prevTodos.map((eachValue) => {
        if (eachValue.id === id) {
          return updateTodo;
        }
      })
    })

  };

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    if (storedTodos.length > 0) {
      setTodos(storedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);



  return (
    <TodoProvider value={{ todos, addTodo, removeTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm />
            {/* Todo form goes here */}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>

            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}




export default App
