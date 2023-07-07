export interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export interface TodoProps {
  todo: Todo;
}

export interface TodoItemProps extends TodoProps {
  onRemove: (id: number) => void;
  handleCheckBox: (id: number, done: boolean) => void;
}

export interface TodoListProps {
  todos: Todo[];
  onRemove: (id: number) => void;
  handleCheckBox: (id: number, done: boolean) => void;
}
