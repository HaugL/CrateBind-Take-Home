import React from 'react'
import {render, fireEvent, waitFor, screen, cleanup, act} from '@testing-library/react'
import App from '../App';
import fetchMock from 'fetch-mock'

import testData from './fixtures/github/repos_with_forks.json'

const setup = () => {
  const utils = render(<App />)
  const input = screen.getByTestId('user-input')
  const button = screen.getByTestId('submit-button')
  return {
    input,
    button,
    ...utils,
  }
}

afterEach(cleanup);
afterAll(() => fetchMock.restore())

test('renders repo items when API returns results', async () => {
  fetchMock.mock('https://api.github.com/users/HaugL/repos', testData, { overwriteRoutes: true })
  const { input, button } = setup()

  act(() => fireEvent.change(input, {target: {value: 'HaugL'}}))
  expect(screen.getByDisplayValue('HaugL')).toBeInTheDocument()
  act(() => fireEvent.click(button))
  await waitFor(() => {
    const repos = screen.queryAllByTestId('repo-item')
    expect(repos[0]).toBeInTheDocument()
    expect(repos.length).toBe(10)
  });
});


test('renders message when API returns empty results', async () => {
  fetchMock.mock('https://api.github.com/users/HaugL/repos', [], { overwriteRoutes: true })
  const { input, button } = setup()

  act(() => fireEvent.change(input, {target: {value: 'HaugL'}}))
  expect(screen.getByDisplayValue('HaugL')).toBeInTheDocument()
  act(() => fireEvent.click(button))
  await waitFor(() => {
    expect(screen.getByTestId('no-repos')).toBeInTheDocument()
  });
});

test('renders error message when API returns 404', async () => {
  fetchMock.mock('https://api.github.com/users/HaugL/repos', 404, { overwriteRoutes: true })
  const { input, button } = setup()

  act(() => fireEvent.change(input, {target: {value: 'HaugL'}}))
  expect(screen.getByDisplayValue('HaugL')).toBeInTheDocument()
  act(() => fireEvent.click(button))
  await waitFor(() => {
    expect(screen.getByText('That GitHub User Does Not Exist')).toBeInTheDocument()
  });
});
