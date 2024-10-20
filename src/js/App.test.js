import { render, screen } from '@testing-library/react';
import _app from '../pages/_app';

test('renders learn react link', () => {
  render(<_app />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
