import { IoAdd } from 'react-icons/io5';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value); // 입력한 값을 받아와 setValue값에 넣어준다.
  }, []); // 컴포넌트가 리렌더링 될때마다 함수를 새로 만드는 것이 아니라 한번 함수를 만들고 재사용 useCallback

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); //submit 이벤트는 페이지의 새로고침을 발생 시킨다. 이를 방지하기 위해 이 함수를 호출
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        onChange={onChange}
        value={value}
      />
      <button type="submit">
        <IoAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
