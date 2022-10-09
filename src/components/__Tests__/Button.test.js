import React from 'react';

import { render } from '@testing-library/react';
import { Button } from '../Button/Button';
import Trash from '../../img/trash.png';

const testLabel = 'Test Label';

describe('Button with label', () => {
  it('Should render', () => {
    const renderContent = <Button label={testLabel} onClick={void 0} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});

describe('Button with image', () => {
  it('Should render', () => {
    const renderContent = <Button img={Trash} onClick={void 0} />;
    const view = render(renderContent);
    expect(view).toMatchSnapshot();
  });
});
