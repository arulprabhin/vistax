import React from 'react';

import Layout from '../index';

import { renderWithProviders } from '../../../utils/testUtils';

const renderComponent = () => {
  return renderWithProviders(
    <Layout>
      <div />
    </Layout>
  );
};

describe('Layout component', () => {
  it('render successfully', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });
});
