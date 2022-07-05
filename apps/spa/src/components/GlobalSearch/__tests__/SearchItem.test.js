import React from 'react';

/*import SearchItem from '../../../../../hunt/src/component/DiscoverButton/SearchItem';

const renderComponent = (props) => {
  const newProps = {
    item: {
      label: 'General',
      subItems: [{ label: 'Event' }],
    },
    search: '',
    onClose: jest.fn(),
    ...props,
  };

  return renderWithProviders(<SearchItem {...newProps} />);
};

describe('SearchItem component', () => {
  it('render successfully', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('should toggle subItems', () => {
    const { getByTestId, queryAllByTestId } = renderComponent();

    fireEvent.click(getByTestId('toggle-button'));
    expect(queryAllByTestId('search-subitem')).toHaveLength(1);
    expect(screen.getByText('Event')).toBeTruthy();
  });

  it('should NOT render search item if it doesnt include search query', () => {
    renderComponent({ search: 'search' });

    expect(screen.queryByTestId('toggle-button')).toBeFalsy();
  });

  it('should render search subitem if subitem contains search query', () => {
    renderComponent({ search: 'ev' });

    expect(screen.queryAllByTestId('search-subitem')).toBeTruthy();
  });
});*/
