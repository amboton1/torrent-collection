/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react';
import Dashboard from '../../pages/Dashboard';
import { screen } from '@testing-library/react';

test('should render', () => { 
    render(<Dashboard user={{name: 'Ammar'}} movies={[{movies: [ {title: 'Test'} ]}]} />);

    const div = screen.getAllByText(/ammar/i);
    expect(div).toBeTruthy()
 })