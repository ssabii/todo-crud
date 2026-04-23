import { FormEvent, useState } from 'react';
import { initialTodos, Todo, FilterType, generateId } from './data/todos';
import './App.css';
import TodoItem from './components/TodoItem';
import useTodos from './hooks/useTodos';

function App() {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodos();
  const [filter, setFilter] = useState<FilterType>('all');
  const [inputValue, setInputValue] = useState('');

  const handleAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    addTodo(inputValue)
    setInputValue('')
  };

  const handleFilterClick = (name: FilterType) => {
    setFilter(name);
  }

  const emptyTextMap: Record<FilterType, string> = {
    'all': '할일을 추가해 보세요.',
    'completed': '완료된 항목이 없습니다.',
    'active': '진행중인 항목이 없습니다.',
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });
  const isEmpty = filteredTodos.length === 0;

  const remainingCount = todos.filter((todo) => !todo.completed).length;

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
        <button onClick={() => handleFilterClick('all')} className={filter === 'all' ? 'active' : ''}>전체</button>
        <button onClick={() => handleFilterClick('active')} className={filter === 'active' ? 'active' : ''}>진행중</button>
        <button onClick={() => handleFilterClick('completed')} className={filter === 'completed' ? 'active' : ''}>완료</button>
      </div>

      {/* TODO: 할 일 목록 */}
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem todo={todo} onToggleTodo={() => toggleTodo(todo.id)} onDeleteTodo={() => deleteTodo(todo.id)} />
        ))}

      </ul>
      {isEmpty && <div className='empty-state'>{emptyTextMap[filter]}</div>}

      {/* TODO: 카운터 */}
      <div className="counter">{remainingCount}개 남음</div>
    </div>
  );
}

export default App;
