import { render } from '@testing-library/react';

import MenuExample from './menu-example';

describe('MenuExample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MenuExample />);
    expect(baseElement).toBeTruthy();
  });
});
