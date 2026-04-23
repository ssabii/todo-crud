import { Todo } from "../data/todos";

interface TodoItemProps {
  todo: Todo;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}
export default function TodoItem({ todo, onToggleTodo, onDeleteTodo }: TodoItemProps) {
  const { id, text, completed } = todo;

  return <li className={completed ? "todo-item completed" : "todo-item"}>
    <input id={`todo-item-${id}`} type="checkbox" onChange={() => onToggleTodo(id)} checked={completed} />
    <label htmlFor={`todo-item-${id}`}>{text}</label>
    <button onClick={() => onDeleteTodo(id)} className='delete-button'>x</button>
  </li>

}
