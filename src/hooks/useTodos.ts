import { useCallback, useState } from "react";
import { generateId, initialTodos, Todo } from "../data/todos";

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = useCallback((text: string) => {
    const todo: Todo = {
      id: generateId(),
      text,
      completed: false,
      createdAt: new Date(),
    }
    const newTodos = [...todos, todo];

    setTodos(newTodos);
  }, [])

  const deleteTodo = useCallback((id: string) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos)
  }, [])

  const toggleTodo = useCallback((id: string) => {
    const index = todos.findIndex((item) => item.id === id);

    if (index > -1) {
      const newTodos = todos.map((todo) => todo.id === id ? {
        ...todo,
        completed: !todo.completed
      } : todo)

      setTodos(newTodos);
    }
  }, [])

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
  }
}
