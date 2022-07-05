import React from 'react';
import { render } from '@testing-library/react';

import HuntActivityTable from '../../HuntActivityTable';

jest.mock('../../../utils', () => ({
  ...jest.requireActual('../../../utils'),
  makeApiRequest: jest.fn(),
}));

const renderComponent = () => {
  return render(<HuntActivityTable />);
};

describe('Activity component', () => {
  it('render it successfully', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });
});
