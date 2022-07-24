/** @jest-environment jsdom */
import React from 'react'
import Home from '../Home';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/react';

test('should render', () => {
    const div = document.createElement('div');
    render(<Home />, div);

    expect(screen.getAllByTestId('home')).toBeTruthy();
    expect(screen.getByText('Home Content - Not logged in')).toBeTruthy()

 })