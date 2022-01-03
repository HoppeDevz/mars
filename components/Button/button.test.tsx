import { render, screen } from '@testing-library/react';
import Button from './index';

test("render button", () => {

    const { container, getByText } = render(<Button type="fill" label="Test" />);

    const button = getByText("Test");

    expect(button).toBeInTheDocument();
});

test("must start with default tailwind class (transparent style) and default label", () => {

    const { container, getByText } = render(<Button />);

    const button = getByText("DefaultLabel");

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("hover:text-white text-slate-400 font-bold mx-2 mx-2 px-2 py-1");
    expect(button).toHaveTextContent("DefaultLabel");
});