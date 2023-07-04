import { render, screen } from "@testing-library/react";
import { TodoForm } from "@/components/TodoForm";

describe("<TodoFrom />", () => {
  it("has input and button", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력하세요.");
    const button = screen.getByText("등록하기");
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
