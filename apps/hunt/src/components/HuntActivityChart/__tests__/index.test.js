import React from 'react';
import { render } from '@testing-library/react';

import HuntActivityChart from '../index';

const renderComponent = () => {
  return render(<HuntActivityChart />);
};

describe('Activity component', () => {
  it('render successfully with anomaly', () => {
    const { container } = renderComponent({ anomaly: 'anomaly' });
    expect(container).toBeTruthy();
  });
  it('render successfully with severity', () => {
    const { container } = renderComponent({ severity: 'severity' });
    expect(container).toBeTruthy();
  });
});
