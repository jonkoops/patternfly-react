/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverFooter } from '../../PopoverFooter';

it('PopoverFooter should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverFooter className={"''"} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
