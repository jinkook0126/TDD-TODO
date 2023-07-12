import { fireEvent, render, screen } from '@testing-library/react';
import TodoForm from '@/components/TodoForm';

describe('<TodoFrom />', () => {
  const setup = () => {
    const onInsert = jest.fn();
    const utils = render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText('할 일을 입력하세요');
    const button = screen.getByText('등록하기');
    return {
      ...utils,
      input,
      button,
      onInsert,
    };
  };
  it('has input and button', () => {
    const { input, button } = setup();
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('changes input', () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: 'TDD-TODO',
      },
    });

    expect(input).toHaveValue('TDD-TODO');
  });

  it('call with empty value', () => {
    const { input, button } = setup();
    fireEvent.change(input, {
      target: {
        value: '',
      },
    });
    const spyFn = jest.spyOn(window, 'alert').mockImplementation(() => null);
    fireEvent.click(button);
    expect(spyFn).toHaveBeenCalledTimes(1);
  });

  it('calls onInsert and clears input', () => {
    const { input, button, onInsert } = setup();
    fireEvent.change(input, {
      target: {
        value: 'TDD-TODO',
      },
    });
    fireEvent.click(button);
    expect(onInsert).toHaveBeenCalledWith('TDD-TODO');
    expect(input).toHaveValue('');
  });
});
