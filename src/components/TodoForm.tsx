import React, { useState, ChangeEvent } from "react";

export const TodoForm = () => {
  const [value, setValue] = useState("");
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <form action="">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={handleInput}
      />
      <button type="submit">등록하기</button>
    </form>
  );
};
