import { useState, useEffect, useCallback } from 'react';
import TodoForm from '@/components/TodoForm';
import TodoList from '@/components/TodoList';
import { Todo } from '@/types/todoProps';

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    const data = [
      {
        id: 1,
        text: 'TODO-TDD',
        done: true,
      },
      {
        id: 2,
        text: 'Velog 작성하기',
        done: false,
      },
    ];
    setTodos(data);
  }, []);
  const onInsert = useCallback(
    (value: string) => {
      const newId = todos.length - 1 ? todos[todos.length - 1].id + 1 : 1;
      const newData = {
        id: newId,
        text: value,
        done: false,
      };
      setTodos([...todos, newData]);
    },
    [todos],
  );
  const onRemove = useCallback(
    (id: number) => {
      const filtered = todos.filter(todo => todo.id !== id);
      setTodos(filtered);
    },
    [todos],
  );
  const handleCheckBox = useCallback(
    (id: number, done: boolean) => {
      const filtered = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, ...{ done } };
        }
        return todo;
      });
      setTodos(filtered);
    },
    [todos],
  );
  return (
    <div>
      <TodoForm onInsert={onInsert} />
      <TodoList onRemove={onRemove} todos={todos} handleCheckBox={handleCheckBox} />
    </div>
  );
};
export default TodoApp;
