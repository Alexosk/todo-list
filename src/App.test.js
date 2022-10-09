import React from 'react';

import { render } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('Should render', () => {
    const renderContent = <App />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
