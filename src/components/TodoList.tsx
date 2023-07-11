import { TodoListProps } from '@/types/todoProps';
import TodoItem from './TodoItem';
import { styled } from 'styled-components';

export default ({ todos, onRemove, handleCheckBox }: TodoListProps) => (
  <Card>
    <Box>
      <Title>할일목록</Title>
      <ul data-testid='TodoList'>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} handleCheckBox={handleCheckBox} />
        ))}
      </ul>
    </Box>
  </Card>
);

const Card = styled.div`
  margin-top: 28px;
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
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgb(57 87 240 / 22%);
`;

const Title = styled.h3``;
