import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from './index';

describe('Dialog', () => {
  it('renders the title and children', () => {
    render(
      <Dialog onClose={() => {}}>
        <form>
          <input type="text" name="title" className="input" tabIndex="0" placeholder='test text'/>
          <button tabIndex="0">Submit</button>
        </form>
      </Dialog>
    );

    expect(screen.getByPlaceholderText('test text')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', () => {
    const onCloseMock = jest.fn();
    render(
      <Dialog title="Test Title" onClose={onCloseMock}>
        <div>
          <input type="text" name="title" className="input" tabIndex="0" />
          <button tabIndex="0">Submit</button>
        </div>
      </Dialog>
    );

    const closeButton = screen.getByTestId('close');
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalled();
  });
});