import { TodoListProps } from '@/types/todoProps';
import TodoItem from '@/components/TodoItem';
import { styled } from 'styled-components';

const Card = styled.div`
  margin-top: 28px;
  padding: 20px;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const Box = styled.div`
  margin-top: 12px;
  padding: 14px;
  width: 420px;
  background: #2196f3;
  box-shadow:
    0 14px 28px rgba(0, 0, 0, 0.25),
    0 10px 10px rgb(57 87 240 / 22%);
`;

const Title = styled.h3`
  color: #2196f3;
`;

const Ul = styled.ul`
  list-style: none;
`;

const TodoList = ({ todos, onRemove, handleCheckBox }: TodoListProps) => (
  <Card>
    <Title>할일목록</Title>
    <Box>
      <Ul data-testid='TodoList'>
        {todos.map(todo => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} handleCheckBox={handleCheckBox} />
        ))}
      </Ul>
    </Box>
  </Card>
);
export default TodoList;
