import { render, screen } from '@testing-library/react';
import RepoForm from '../components/RepoForm';

test('renders correct button text when not submitting', () => {
  render(<RepoForm isSubmitting={false} />);
  const button = screen.getByText(/Find Popular Repos/i);
  expect(button).toBeInTheDocument();
});

test('does not render spinner when not submitting', () => {
  const {container} = render(<RepoForm isSubmitting={false} />);
  expect(container.getElementsByClassName('btn-loading').length).toBe(0)
});

test('renders correct button text when submitting', () => {
  render(<RepoForm isSubmitting={true} />);
  const button = screen.getByText(/Fetching/i);
  expect(button).toBeInTheDocument();
});

test('renders spinner when submitting', () => {
  const {container} = render(<RepoForm isSubmitting={true} />);
  expect(container.getElementsByClassName('btn-loading').length).toBe(1)
});
