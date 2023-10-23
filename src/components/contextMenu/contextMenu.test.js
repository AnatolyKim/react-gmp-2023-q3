import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextMenu from './index';
import { MemoryRouter as Router } from "react-router-dom";
import { act } from 'react-dom/test-utils';

describe('ContextMenu', () => {
  const actions = ['edit', 'delete'];
  let component;
  
  beforeEach(() => {
    component = render(<Router initialEntries={["/"]}><ContextMenu actions={actions} id="123" /></Router>)
  })

  it('should display the menu when the button is clicked', () => {
    const { getByRole, getByText } = component;

    const button = getByRole('button');

    act(() => {
      fireEvent.click(button);
    })

    expect(getByText('edit')).toBeInTheDocument();
    expect(getByText('delete')).toBeInTheDocument();
  });

  it('should hide the menu when a menu item is clicked', () => {
    const { getByRole, queryByText } = component;

    const button = getByRole('button');

    act(() => {
      fireEvent.click(button);
    })

    act(() => {
      fireEvent.click(button);
    })


    expect(queryByText('delete')).not.toBeInTheDocument();
  });
});