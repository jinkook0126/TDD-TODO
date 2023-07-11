import React, { useState, ChangeEvent, FormEvent } from 'react';

interface TodoFromProps {
  onInsert: (value: string) => void;
}

export default ({ onInsert }: TodoFromProps) => {
  const [value, setValue] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    onInsert(value);
    e.preventDefault();
    setValue('');
  };
  return (
    <form onSubmit={onSubmitTodo}>
      <input type='text' placeholder='할 일을 입력하세요' value={value} onChange={handleInput} />
      <button type='submit'>등록하기</button>
    </form>
  );
};
