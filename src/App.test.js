import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Counter', () => {
  test('renders title of application', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText("Counter Application");
    expect(linkElement).toBeInTheDocument();
  });
});

