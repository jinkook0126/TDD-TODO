import { TodoApp } from "@/components/TodoApp";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<TodoApp />", () => {
  it("render TodoForm and TodoList", () => {
    render(<TodoApp />);
    screen.getByText("등록하기");
    screen.getByTestId("TodoList");
  });

  it("renders two defaults todos", () => {
    render(<TodoApp />);
    screen.getByText("TODO-TDD");
    screen.getByText("Velog 작성하기");
  });

  it("create new todo", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByText("등록하기");
    fireEvent.change(input, {
      target: {
        value: "라면 끓이기",
      },
    });
    fireEvent.click(button);
    screen.getByText("라면 끓이기");
  });

  it("checkbox todo", () => {
    render(<TodoApp />);
    const input = screen.getByLabelText("TODO-TDD", { selector: "input" });
    const label = screen.getByText("TODO-TDD");
    expect(label).toHaveStyle("text-decoration: line-through;");
    fireEvent.click(input);
    expect(label).not.toHaveStyle("text-decoration: line-through;");
    fireEvent.click(input);
    expect(label).toHaveStyle("text-decoration: line-through;");
  });

  it("removes todo", () => {
    render(<TodoApp />);
    const todoText = screen.getByText("TODO-TDD");
    const removeBtn = screen.getAllByText("삭제");
    fireEvent.click(removeBtn[0]);
    expect(todoText).not.toBeInTheDocument();
  });
});
