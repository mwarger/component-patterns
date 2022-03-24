import { render } from '@testing-library/react';

import ComponentLib from './component-lib';

describe('ComponentLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentLib />);
    expect(baseElement).toBeTruthy();
  });
});
