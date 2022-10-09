import React from 'react';

import { render } from '@testing-library/react';
import { Header } from '../Header/Header';

const testTitle = 'Test Label';

describe('Header', () => {
  it('Should render', () => {
    const renderContent = <Header title={testTitle} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
