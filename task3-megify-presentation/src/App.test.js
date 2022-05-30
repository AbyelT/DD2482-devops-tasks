import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hello DD2482', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello DD2482/i);
  expect(linkElement).toBeInTheDocument();
});
