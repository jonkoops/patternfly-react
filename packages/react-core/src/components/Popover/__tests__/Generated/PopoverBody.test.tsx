/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverBody } from '../../PopoverBody';

it('PopoverBody should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverBody id={'string'} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
