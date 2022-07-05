import React from 'react';
import { render } from '@testing-library/react';

import NotableItems from '../index';
import { notableHostTestData } from '../NotableItems.data';

const renderComponent = ({ bgcolor, score, icon, text } = {}) => {
  return render(<NotableItems data={notableHostTestData} bgcolor={bgcolor} score={score} icon={icon} text={text} />);
};

describe('NotableItems component', () => {
  it('render successfully with bgcolor', () => {
    const { container } = renderComponent({ bgcolor: '#ffffff' });
    expect(container).toBeTruthy();
  });

  it('render successfully without bgcolor', () => {
    const { container } = renderComponent();
    expect(container).toBeTruthy();
  });

  it('should render item text', () => {
    const { queryByText } = renderComponent({ text: 'host_name' });

    notableHostTestData.forEach((details) => {
      expect(queryByText(details['host_name'])).toBeTruthy();
    });
  });

  it('should render item score', () => {
    const { queryAllByText } = renderComponent({ score: 'host_score' });

    notableHostTestData.forEach((details) => {
      expect(queryAllByText(details['host_score']).length).toBe(
        notableHostTestData.filter(({ host_score }) => host_score === details['host_score']).length
      );
    });
  });
});
