import { FormEvent, useState } from 'react';
import { initialTodos, Todo, FilterType, generateId } from './data/todos';
import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<FilterType>('all');
  const [inputValue, setInputValue] = useState('');

  // TODO: 할 일 추가
  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: Todo = {
      id: generateId(),
      text: inputValue,
      completed: false,
      createdAt: new Date(),
    }
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    setInputValue('')
  };

  // TODO: 완료 토글
  const handleToggle = (id: string) => {
    console.log('토글:', id);
  };

  // TODO: 삭제
  const handleDelete = (id: string) => {
    console.log('삭제:', id);
  };

  // TODO: 필터링된 목록
  const filteredTodos = todos;

  // TODO: 남은 할 일 개수
  const remainingCount = 0;

  return (
    <div className="app">
      <h1>할 일 목록</h1>

      {/* 입력 영역 */}
      <form onSubmit={handleAdd} className='input-container'>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="할 일을 입력하세요"
          className="todo-input"
        />
        <button type="submit" className="add-button">
          추가
        </button>
      </form>

      {/* TODO: 필터 버튼 */}
      <div className="filter-container">
        <button className={filter === 'all' ? 'active' : ''}>전체</button>
        <button className={filter === 'active' ? 'active' : ''}>진행중</button>
        <button className={filter === 'completed' ? 'active' : ''}>완료</button>
      </div>

      {/* TODO: 할 일 목록 */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.text}</span>
          </li>
        ))}
      </ul>

      {/* TODO: 카운터 */}
      <div className="counter">{remainingCount}개 남음</div>
    </div>
  );
}

export default App;
