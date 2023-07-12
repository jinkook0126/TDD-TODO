import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from 'styled-components';

interface TodoFromProps {
  onInsert: (value: string) => void;
}
const Card = styled.div`
  padding: 20px;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
  padding: 14px;
  width: 420px;
  background: #2196f3;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgb(57 87 240 / 22%);
`;

const Form = styled.form`
  display: flex;
  width: 100%;
`;

const Button = styled.button`
  color: #2196f3;
  background: white;
  height: 36px;
  padding: 0 13px;
  border: none;
  margin-left: 20px;
  cursor: pointer;
`;

const Input = styled.input.attrs({ type: 'text' })`
  height: 36px;
  border: none;
  padding-left: 14px;
  outline: none;
  flex: 1;
`;

const TodoForm = ({ onInsert }: TodoFromProps) => {
  const [value, setValue] = useState('');
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmitTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') {
      /* eslint-disable-next-line no-alert */
      alert('할 일을 입력해주세요.');
      return;
    }
    onInsert(value);
    setValue('');
  };
  return (
    <Card>
      <Box>
        <Form onSubmit={onSubmitTodo}>
          <Input type='text' placeholder='할 일을 입력하세요' value={value} onChange={handleInput} />
          <Button type='submit'>등록하기</Button>
        </Form>
      </Box>
    </Card>
  );
};
export default TodoForm;
