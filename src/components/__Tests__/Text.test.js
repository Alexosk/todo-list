import React from 'react';

import { render } from '@testing-library/react';
import { Text } from '../Text.js';

const testText = 'Test Label';

describe('Text', () => {
  it('Should render', () => {
    const renderContent = <Text children={testText} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
