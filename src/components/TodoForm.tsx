import React, { useState, ChangeEvent, FormEvent } from 'react';
import { styled } from 'styled-components';
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
    <Card>
      <Box>
        <Form onSubmit={onSubmitTodo}>
          <InputBox type='text' placeholder='할 일을 입력하세요' value={value} onChange={handleInput} />
          <Button type='submit'>등록하기</Button>
        </Form>
      </Box>
    </Card>
  );
};

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

const InputBox = styled.input`
  height: 36px;
  border: none;
  width: 300px;
  padding-left: 14px;
  outline: none;
  flex: 1;
`;
