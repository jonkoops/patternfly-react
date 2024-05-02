/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, it } from 'vitest';

import { PopoverContent } from '../../PopoverContent';

it('PopoverContent should match snapshot (auto-generated)', () => {
  const { asFragment } = render(<PopoverContent className={'null'} children={<div>ReactNode</div>} />);
  expect(asFragment()).toMatchSnapshot();
});
