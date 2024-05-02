/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverHeader } from '../../PopoverHeader';

it('PopoverHeader should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverHeader id={'string'} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
