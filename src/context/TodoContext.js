import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "Sample Todo",
            completed: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        }
    ],
    addTodo: (todo) => {},
    removeTodo: (id) => {},
    updateTodo: (id, todo) => {},
    toggleComplete: (id) => {},
});

export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;
