import { TodoItemProps } from "@/types/todoProps";
import { useCallback } from "react";

interface LabelProps {
  checked: boolean;
}
export const TodoItem = ({ todo, onRemove }: TodoItemProps) => {
  const { id, text, done } = todo;
  const remove = useCallback(() => onRemove(id), [id, onRemove]);

  return (
    <li>
      <input type="checkbox" id={text} checked={done} readOnly />
      <label
        htmlFor={text}
        style={{ textDecoration: done ? "line-through" : "none" }}
      >
        {text}
      </label>
      <button type="button" onClick={remove}>
        삭제
      </button>
    </li>
  );
};