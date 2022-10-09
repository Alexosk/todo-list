import React from 'react';

import { render } from '@testing-library/react';
import { TextInput } from '../TextInput/TextInput';

describe('TextInput', () => {
  it('Should render', () => {
    const renderContent = <TextInput userInput="" handleChange={void 0} placeholder="" onKeyDown={void 0} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
