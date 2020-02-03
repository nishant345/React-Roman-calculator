import React from 'react';
import ReactDOM from 'react-dom';
import { render, queryByAttribute } from '@testing-library/react';
import App from '../App';

it("closes dialog if document is clicked", () => {
    const closeFn = jest.fn();
    const evt = new MouseEvent('click', { bubbles: true });
    document.dispatchEvent(evt);
    expect(closeFn).toHaveBeenCalledTimes(0);
});


