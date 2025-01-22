//Task 3
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CommentForm from '../Components/CommentForm'; 

const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
            store[key] = value;
        },
        clear: () => store = {},
        removeItem: (key: string) => delete store[key]
    };
})();

describe('CommentForm', () => {
    // Mocks localStorage before every test
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', {
        value: localStorageMock,
        writable: true,
    });
  });

  it('renders correctly', () => {
    // test case to check if the component renders correctly
    expect(render(<CommentForm />))
  });

  it('handles input changes', () => {
    // test case to check if the input values (title and body) change as expected
    render(<CommentForm />);

    const title: HTMLInputElement = screen.getByLabelText("Title");
    const body: HTMLInputElement =  screen.getByLabelText("Body");

    fireEvent.change(title, { target: { value: 'test' }})
    fireEvent.change(body, { target: { value: 'test' }})

    expect(title.value).toBe('test')
    expect(body.value).toBe('test')
  });

  it('submits the form and stores comment in localStorage', () => {
    // Test if submitting the form stores the comment in localStorage

    render(<CommentForm />);

    const title: HTMLInputElement = screen.getByLabelText("Title");
    const body: HTMLInputElement =  screen.getByLabelText("Body");
    const submitButton: HTMLButtonElement = screen.getByText("Submit");

    fireEvent.change(title, { target: { value: 'test' }})
    fireEvent.change(body, { target: { value: 'test' }})
    fireEvent.click(submitButton);

    const storedComments = JSON.parse(localStorage.getItem('comment')!);
    expect(storedComments).toEqual({ title: 'test', body: 'test' })
  });
});

/* eslint-disable react/react-in-jsx-scope */