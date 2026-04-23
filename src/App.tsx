import "./App.css";

import { useEffect, useState } from "react";
import { TodoItem } from "./components/TodoItem";
import { FilterType, initialTodos, Todo } from "./data/todos";
import { TodoFilter } from "./components/TodoFilter";
import { InputContainer } from "./components/InputContainer";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<FilterType>("all");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const localTodos = localStorage.getItem("todos");
    if (!localTodos) {
      setTodos(initialTodos);
      return;
    }

    setTodos(JSON.parse(localTodos));
  }, []);

  const handleAdd = () => {
    const value = inputValue.trim();

    if (value) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now().toString() + Math.random() * 100000,
          text: value,
          completed: false,
          createdAt: new Date(),
          isUpdated: false,
        },
      ]);
      setInputValue("");
    }
  };

  const handleToggle = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const changeUpdateMode = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isUpdated: true } : todo,
      ),
    );
  };

  const handleDeleteAll = () => {
    setTodos((prev) => prev.filter((todo) => !todo.completed));
  };

  const saveLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const filteredTodos = todos.filter((t) => {
    if (filter === "all") return true;
    if (filter === "active") return t.completed === false;
    if (filter === "completed") return t.completed;
    return false;
  });

  const remainingCount = filteredTodos.filter((todo) => !todo.completed).length;

  return (
    <div className="app">
      <h1>할 일 목록</h1>

      <InputContainer
        text={inputValue}
        onChange={setInputValue}
        handleSubmit={handleAdd}
        rightSlot={
          <button onClick={handleAdd} className="add-button">
            추가
          </button>
        }
      />

      <TodoFilter filter={filter} changeFilter={setFilter} />

      <button type="button" onClick={handleDeleteAll}>
        완료된 항목 일괄 삭제
      </button>

      <button type="button" onClick={saveLocalStorage}>
        localStorage에 저장
      </button>

      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={handleToggle}
            onDelete={handleDelete}
            changeUpdateMode={changeUpdateMode}
            setTodos={setTodos}
          />
        ))}
      </ul>

      <div className="counter">{remainingCount}개 남음</div>
    </div>
  );
}

export default App;
