import { fireEvent, render, screen } from "@testing-library/react";
import { TodoForm } from "@/components/TodoForm";

describe("<TodoFrom />", () => {
  it("has input and button", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    const button = screen.getByText("등록하기");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요");
    fireEvent.change(input, {
      target: {
        value: "TDD-TODO",
      },
    });

    expect(input).toHaveAttribute("value", "TDD-TODO");
  });
});
