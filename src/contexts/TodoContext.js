import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,                      //these are the properties
            todo: " Todo msg",
            completed: false,
        }
    ],
    //these are the functions declaration only defination app.jsx me hai
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider