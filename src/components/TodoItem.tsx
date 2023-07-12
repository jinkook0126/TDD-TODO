import { TodoItemProps } from '@/types/todoProps';
import { useCallback } from 'react';
import { styled } from 'styled-components';

const List = styled.li`
  display: flex;
  &:not(:last-child) {
    margin-bottom: 12px;
  }
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
const LabelBox = styled.div`
  flex: 1;
  background: white;
  height: 36px;
  display: flex;
  padding-left: 16px;
  justify-content: flex-start;
  align-items: center;
`;

const CheckBox = styled.input`
  width: 38px;
  margin-right: 12px;
`;
const TodoItem = ({ todo, onRemove, handleCheckBox }: TodoItemProps) => {
  const { id, text, done } = todo;
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <List>
      <CheckBox type='checkbox' id={text} checked={done} onChange={() => handleCheckBox(id, !done)} readOnly />
      <LabelBox>
        <label htmlFor={text} style={{ textDecoration: done ? 'line-through' : 'none' }}>
          {text}
        </label>
      </LabelBox>

      <Button type='button' onClick={remove}>
        삭제
      </Button>
    </List>
  );
};

export default TodoItem;
