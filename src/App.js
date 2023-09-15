import TodoInsert from './Components/TodoInsert';
import TodoTemplate from './Components/TodoTemplate';
import TodoList from './Components/TodoList';
import { useCallback, useRef, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트1',
      checked: true,
    },
    {
      id: 2,
      text: '리액트2',
      checked: true,
    },
    {
      id: 3,
      text: '리액트3',
      checked: false,
    },
  ]);
  const nextId = useRef(4); //새로운 객체를 만들때마다 id값에 1을 더해 주어야 함, usestate가 아니라 useRef를 사용하여 컴포넌트에서 사용할 변수를 만드는 이유? -> id 값은 렌더링되는 정보가 아니기때문에
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos],
  );

  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <>
      <div>
        <TodoTemplate>
          <TodoInsert onInsert={onInsert} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;
