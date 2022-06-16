import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '.';

describe('Counter Component', () => {
  test('should title start with value 0', () => {
    render(<Counter />);
    const countTitle = screen.getByText('0');
    expect(countTitle).toBeInTheDocument();
  });

  test('should title have class counter__title', () => {
    render(<Counter />);

    const countTitle = screen.getByText('0');

    expect(countTitle).toHaveClass('counter__title');
  });

  test('should not have init the title with classes counter__title--increment and counter__title--decrement', () => {
    render(<Counter />);

    const countTitle = screen.getByText('0');

    expect(countTitle).not.toHaveClass('counter__title--increment');
    expect(countTitle).not.toHaveClass('counter__title--decrement');
  });

  test('should verify button increment', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(buttonIncrement).toBeInTheDocument();
  });

  test('should verify this have classes button and button--increment', () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(buttonIncrement).toHaveClass('button');
    expect(buttonIncrement).toHaveClass('button--increment');
  });

  test('should verify button decrement', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(buttonDecrement).toBeInTheDocument();
  });

  test('should verify this have classes button and button--decrement', () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(buttonDecrement).toHaveClass('button');
    expect(buttonDecrement).toHaveClass('button--decrement');
  });

  test('should event increment', async () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(screen.queryByText('1')).toBeNull();
    await userEvent.click(buttonIncrement);

    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('should event decrement', async () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(screen.queryByText('-1')).toBeNull();
    await userEvent.click(buttonDecrement);

    expect(screen.getByText('-1')).toBeInTheDocument();
  });

  test('should add class counter__title--increment in title', async () => {
    render(<Counter />);

    const buttonIncrement = screen.getByRole('button', {name: /incrementar/i});

    expect(screen.queryByText('0')).not.toHaveClass(
      'counter__title--increment',
    );
    await userEvent.click(buttonIncrement);

    expect(screen.getByText('1')).toHaveClass('counter__title--increment');
  });

  test('should add class counter__title--decrement in title', async () => {
    render(<Counter />);

    const buttonDecrement = screen.getByRole('button', {name: /decrementar/i});

    expect(screen.queryByText('0')).not.toHaveClass(
      'counter__title--decrement',
    );
    await userEvent.click(buttonDecrement);

    expect(screen.getByText('-1')).toHaveClass('counter__title--decrement');
  });
});
