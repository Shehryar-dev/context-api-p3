import { use } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {

    const [todos, setTodos] = useState([]);

    const {addTodo} = useTodo(); 

    const add = (e) =>{
        e.preventDefault();
        if(!todos) return
        addTodo({
            title: todos,
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        });
        setTodos("");
    }

    return (
        <form onSubmit={add}  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todos}
                onChange={(e) => setTodos(e.target.value)}

            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

