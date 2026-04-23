import { Todo } from "../data/todos";
import { TodoUpdate } from "./TodoUpdate";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  changeUpdateMode: (id: string) => void;
  setTodos: (value: React.SetStateAction<Todo[]>) => void;
};

export const TodoItem = ({
  todo,
  onToggle,
  onDelete,
  changeUpdateMode,
  setTodos,
}: Props) => {
  if (todo.isUpdated) {
    return <TodoUpdate setTodos={setTodos} todoId={todo.id} />;
  }

  return (
    <li key={todo.id} className="todo-item" onClick={() => onToggle(todo.id)}>
      <span
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.text}
      </span>

      <div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            changeUpdateMode(todo.id);
          }}
          style={{
            marginRight: "10px",
          }}
        >
          수정
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(todo.id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};
