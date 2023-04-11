import { render, screen, fireEvent } from '@testing-library/react';
import RepoForm from '../components/RepoForm';

function renderForm(props){
  const {container} = render(<RepoForm {...props} />)
  return container
}

function findButton(){
  return screen.getByTestId('submit-button')
}

function addTextToInput(container, text){
  const input = screen.getByTestId('user-input')
  fireEvent.change(input, {target: {value: text}})
}

function findInputError(){
  return screen.queryByTestId('input-error')
}

// Fetching Button Tests
test('renders correct button text when not submitting', () => {
  const container = renderForm({isSubmitting: false})
  expect(findButton().textContent).toBe('Find Popular Repos')
});

test('renders correct button text when submitting', () => {
  const container = renderForm({isSubmitting: true})
  expect(findButton(container).textContent).toBe('Fetching')
});

test('does not have spinner class when not submitting', () => {
  const container = renderForm({isSubmitting: false})
  expect(findButton(container).className).toBe('repo-fetch-btn')
});

test('renders spinner class when submitting', () => {
  const container = renderForm({isSubmitting: true})
  expect(findButton(container).className).toBe('repo-fetch-btn btn-loading')
});

// Disabled Submit Button Tests
test('renders button as disabled initially', () => {
  const container = renderForm()
  expect(findButton(container).disabled).toBe(true)
});

test('renders button as disabled when text is added and removed', () => {
  const container = renderForm()
  addTextToInput(container, 'HaugL')
  addTextToInput(container, '')
  expect(findButton(container).disabled).toBe(true)
});

test('renders button as not disabled when text is present', () => {
  const container = renderForm()
  addTextToInput(container, 'HaugL')
  expect(findButton(container).disabled).toBe(false)
});


// Input Error
test('renders no input error initially', () => {
  const container = renderForm()
  expect(findInputError()).toBeNull()
});

test('renders no input error when text is present', () => {
  const container = renderForm()
  addTextToInput(container, 'HaugL')
  expect(findInputError()).toBeNull()
});

test('renders input error when text is added and removed', () => {
  const container = renderForm()
  addTextToInput(container, 'HaugL')
  addTextToInput(container, '')
  expect(findInputError()).not.toBeNull()
});
