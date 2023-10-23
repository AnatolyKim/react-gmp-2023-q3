import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ContextMenu from './ContextMenu';

describe('ContextMenu', () => {
  const actions = ['edit', 'delete'];

  it('should display the menu when the button is clicked', () => {
    const { getByRole, getByText } = render(
      <ContextMenu actions={actions} id="123" />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    expect(button).toHaveClass('opened');
    expect(getByText('edit')).toBeInTheDocument();
    expect(getByText('delete')).toBeInTheDocument();
  });

  it('should hide the menu when a menu item is clicked', () => {
    const { getByRole, getByText, queryByText } = render(
      <ContextMenu actions={actions} id="123" />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    const deleteItem = getByText('delete');

    fireEvent.click(deleteItem);

    expect(queryByText('delete')).not.toBeInTheDocument();
    expect(button).not.toHaveClass('opened');
  });

  it('should navigate when a menu item is clicked', () => {
    const navigateMock = jest.fn();

    const { getByRole, getByText } = render(
      <ContextMenu actions={actions} id="123" navigate={navigateMock} />
    );

    const button = getByRole('button');

    fireEvent.click(button);

    const editItem = getByText('edit');

    fireEvent.click(editItem);

    expect(navigateMock).toBeCalledWith('123/edit');
  });
});