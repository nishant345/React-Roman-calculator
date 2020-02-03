import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import App from './App';
import "@testing-library/jest-dom";

test('renders App', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it("renders the first field correctly", () => {
	const {getByTestId} = render(<App />)
	expect(getByTestId('romanNumeralOne')).toBeInTheDocument();
});

it("renders the second field correctly", () => {
	const {getByTestId} = render(<App />)
	expect(getByTestId('romanNumeralTwo')).toBeInTheDocument();
});

it("renders the operation drop down correctly", () => {
	const {getByTestId} = render(<App />)
	expect(getByTestId('operations')).toBeInTheDocument();
});

it("renders the submit button correctly", () => {
	const {getByTestId} = render(<App />)
	expect(getByTestId('calculateButton')).toBeInTheDocument();
	expect(getByTestId('calculateButton')).toHaveTextContent("Calculate");
});

it("renders the short message correctly", () => {
	const {getByTestId} = render(<App />)
	expect(getByTestId('shortMsg')).toHaveTextContent("When in Rome, do as the Romans do");
});
