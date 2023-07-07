import { TodoListProps } from "@/types/todoProps";
import { TodoItem } from "./TodoItem";

export const TodoList = ({
  todos,
  onRemove,
  handleCheckBox,
}: TodoListProps) => (
  <ul data-testid="TodoList">
    {todos.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        onRemove={onRemove}
        handleCheckBox={handleCheckBox}
      />
    ))}
  </ul>
);
