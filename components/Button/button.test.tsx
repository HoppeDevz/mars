import { render, screen } from '@testing-library/react';
import Button from './index';

test("render button", () => {

    const { container, getByText } = render(<Button type="fill" label="Test" />);

    expect(getByText("Test")).toBeInTheDocument();
});